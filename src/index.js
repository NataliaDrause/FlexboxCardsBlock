import "./index.scss"
import {TextControl, TextareaControl, Flex, FlexBlock, FlexItem, Button, Icon, Card, CardHeader, CardBody, CardFooter, CardMedia, ExternalLink, FormFileUpload,  __experimentalText as Text, __experimentalHeading as Heading,} from "@wordpress/components"
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';

wp.blocks.registerBlockType("nd-plugins/nd-flexbox-cards-block", {
  title: "Flexbox Cards Block",
  icon: "images-alt",
  category: "design",
  attributes: {
      cardTitle: { type: "array", default: [""] },
      cardDescription: { type: "array", default: [""] },
      imageId: { type: "array", default: [null] },
      imageAlt: { type: "array", default: [""] },
      imageUrl: { type: "array", default: [""] },
      buttonText: { type: "array", default: [""] },
      buttonUrl: { type: "array", default: [""] }
  },
  edit: EditComponent,
  save: function() {
      return (
        <p>Todaty the sky.</p>
      )
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
      {props.attributes.cardTitle.map(function(title, index) {
        return (
          <FlexItem className="flexbox-card-block--items">
            <Card>
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