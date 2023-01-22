import "./index.scss"
import {TextControl, TextareaControl, Flex, FlexItem, Button, Icon, Card, CardHeader, CardBody, CardFooter, CardMedia,  __experimentalText as Text, __experimentalHeading as Heading, PanelBody, PanelRow, ColorPicker} from "@wordpress/components"
import { MediaUpload, MediaUploadCheck, InspectorControls, BlockControls, AlignmentToolbar } from '@wordpress/block-editor';

wp.blocks.registerBlockType("nd-plugins/nd-flexbox-cards-block", {
  title: "Flexbox Cards Block",
  icon: "images-alt",
  category: "design",
  description: "Add Flexbox cards with image and CTA button to your page.",
  attributes: {
      cardTitle: { type: "array", default: [""] },
      cardDescription: { type: "array", default: [""] },
      imageId: { type: "array", default: [null] },
      imageAlt: { type: "array", default: [""] },
      imageUrl: { type: "array", default: [""] },
      buttonText: { type: "array", default: [""] },
      buttonUrl: { type: "array", default: [""] },
      bgColor: { type: "string", default: "#FFFFFF"},
      textAlignment: { type: "string", default: "left"}
  },
  example: {
    attributes: {
      cardTitle: ["Card Title", "Another Card"],
      cardDescription: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."],
      buttonText: ["View more", "View more"],
    }
  },
  edit: EditComponent,
  save: function() {
      return null
  }

})

function EditComponent(props) {

  const ALLOWED_MEDIA_TYPES = [ 'image' ];

  function onSelectImage(media, index) {
    
    const newMediaId = props.attributes.imageId.concat([]);
    newMediaId[index] = media.id;
    const newMediaAlt = props.attributes.imageAlt.concat([]);
    newMediaAlt[index] = media.alt;
    const newMediaUrl = props.attributes.imageUrl.concat([]);
    newMediaUrl[index] = media.url;

    props.setAttributes({imageId: newMediaId, imageAlt: newMediaAlt, imageUrl: newMediaUrl})
  }

  function deleteImage(index) {

    const newMediaId = props.attributes.imageId.concat([]);
    newMediaId[index] = null;
    const newMediaAlt = props.attributes.imageAlt.concat([]);
    newMediaAlt[index] = "";
    const newMediaUrl = props.attributes.imageUrl.concat([]);
    newMediaUrl[index] = "";

    props.setAttributes({imageId: newMediaId, imageAlt: newMediaAlt, imageUrl: newMediaUrl})
  }

  function displayButton(index) {
    if (props.attributes.imageId[index] == null) {
      return {display: "none"};
    }
  }

  function deleteCard(indexToDelete) {

    const newTitle = props.attributes.cardTitle.filter(function(x, index) {
      return index != indexToDelete;
    });
    const newDescription = props.attributes.cardDescription.filter(function(x, index) {
      return index != indexToDelete;
    });
    const newImageId = props.attributes.imageId.filter(function(x, index) {
      return index != indexToDelete;
    });
    const newImageAlt = props.attributes.imageAlt.filter(function(x, index) {
      return index != indexToDelete;
    });
    const newImageUrl = props.attributes.imageUrl.filter(function(x, index) {
      return index != indexToDelete;
    });
    const newButtonText = props.attributes.buttonText.filter(function(x, index) {
      return index != indexToDelete;
    });
    const newButtonUrl = props.attributes.buttonUrl.filter(function(x, index) {
      return index != indexToDelete;
    });
    
    props.setAttributes({cardTitle: newTitle, cardDescription: newDescription, imageId: newImageId, imageAlt: newImageAlt, imageUrl: newImageUrl, buttonText: newButtonText, buttonUrl: newButtonUrl});
  }

  return (
    
    <Flex className="flexbox-card-block">
      <BlockControls>
        <AlignmentToolbar value={props.attributes.textAlignment} onChange={x => props.setAttributes({textAlignment: x})} />
      </BlockControls>
      <InspectorControls>
        <PanelBody title="Card Background Color" initialOpen={true}>
          <PanelRow>
            <ColorPicker color={props.attributes.bgColor} onChangeComplete={x => props.setAttributes({bgColor: x.hex})} />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
    {props.attributes.cardTitle.map(function(title, index) {
      return (
        <FlexItem className="flexbox-card-block--items" >
          <Card style={{backgroundColor: props.attributes.bgColor}}>
            <CardHeader style={{display: "block"}}>
              <CardMedia className="flexbox-card-block--image" >
                {/* IMAGE UPLOAD */}
                <img src={props.attributes.imageUrl[index]} alt={props.attributes.imageAlt[index]} />
              </CardMedia>
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={ media => onSelectImage(media, index) }
                  allowedTypes={ ALLOWED_MEDIA_TYPES }
                  value={ props.attributes.imageId }
                  render={ ( { open } ) => (
                    <Button onClick={ open } variant="secondary" className="flexbox-card-block--image-btn">Open Media Library</Button>
                  ) }
                />
              </MediaUploadCheck>
              <Button className="flexbox-card-block--image-btn" style={displayButton(index)} onClick={() => deleteImage(index)} variant="tertiery" >
                <Icon icon="trash" />
              </Button>
            </CardHeader>
            <CardBody>
              <Heading>
                {/* TITLE */}
                <TextControl value={title} onChange={newValue => {
                  const newTitle = props.attributes.cardTitle.concat([])
                  newTitle[index] = newValue;
                  props.setAttributes({cardTitle: newTitle})
                }} autoFocus={title == undefined} label="Title:" style={{fontSize: "20px"}} />
              </Heading>
              {/* DESCRIPTION */}
              <TextareaControl value={props.attributes.cardDescription[index]} onChange={newValue => {
                const newDescription = props.attributes.cardDescription.concat([])
                newDescription[index] = newValue;
                props.setAttributes({cardDescription: newDescription})
              }} label="Description:" />
            </CardBody>
            <CardFooter style={{display: "block"}}>
              {/* BUTTON TEXT */}
              <TextControl value={props.attributes.buttonText[index]} onChange={newValue => {
                const newText = props.attributes.buttonText.concat([])
                newText[index] = newValue;
                props.setAttributes({buttonText: newText})
              }} label="View more button text:" />
              {/* BUTTON URL */}
              <TextControl value={props.attributes.buttonUrl[index]} onChange={newValue => {
                const newUrl = props.attributes.buttonUrl.concat([])
                newUrl[index] = newValue;
                props.setAttributes({buttonUrl: newUrl})
              }} label="View more button URL:" />
            </CardFooter>
          </Card>
          <Button onClick={() => deleteCard(index)} variant="primary" className="flexbox-card-block--button">
            <Icon icon="trash" />
            Remove card
          </Button>
        </FlexItem>
      )
    })}
    <FlexItem>
      <Button>
        <Icon icon="plus" onClick={() => {
          props.setAttributes({cardTitle: props.attributes.cardTitle.concat([undefined])});
        }} />
      </Button>
    </FlexItem>
  </Flex>
  )
}