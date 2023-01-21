import "./index.scss"
import {TextControl, TextareaControl, Flex, FlexBlock, FlexItem, Button, Icon, Card, CardHeader, CardBody, CardFooter, CardMedia, ExternalLink, FormFileUpload,  __experimentalText as Text, __experimentalHeading as Heading,} from "@wordpress/components"

wp.blocks.registerBlockType("nd-plugins/nd-flexbox-cards-block", {
  title: "Flexbox Cards Block",
  icon: "images-alt",
  category: "design",
  attributes: {
      cardTitle: { type: "array", default: [""] },
      cardDescription: { type: "array", default: [""] },
      cardImage: { 
          type: 'array',
          source: 'attribute',
          selector: 'img',
          attribute: 'src', 
      },
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

  function deleteCard(indexToDelete) {
    const newCards = props.attributes.cardTitle.filter(function(x, index) {
      return index != indexToDelete;
    })
    props.setAttributes({cardTitle: newCards})
  }

  return (
    <Flex className="flexbox-card-block">
      {props.attributes.cardTitle.map(function(title, index) {
        return (
          <FlexItem className="flexbox-card-block--items">
            <Card>
              <CardHeader>
                <CardMedia>
                  {/* IMAGE UPLOAD */}
                  {/*
                  <img src={props.attributes.cardImage[index]} onChange={newValue => {
                    const newImage = props.attributes.cardImage.concat([])
                    newImage[index] = newValue;
                    props.setAttributes({cardImage: newImage})
                  }} alt="my image" style={{marginBottom: "10px"}} />
                  */}
                  <img src="http://plugin-playground.local/wp-content/uploads/2022/12/USA-skyline.jpg" alt="image" style={{marginBottom: "10px"}} />
                  <FormFileUpload variant="secondary" accept="image/*" onChange={ ( event ) => console.log( event.currentTarget.files ) } >
                      Upload an image
                  </FormFileUpload>
                </CardMedia>
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