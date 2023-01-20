import "./index.scss"
import {TextControl, TextareaControl, Flex, FlexBlock, FlexItem, Button, Icon, Card, CardHeader, CardBody, CardFooter, CardMedia, ExternalLink, FormFileUpload,  __experimentalText as Text, __experimentalHeading as Heading,} from "@wordpress/components"

wp.blocks.registerBlockType("nd-plugins/nd-flexbox-cards-block", {
  title: "Flexbox Cards Block",
  icon: "images-alt",
  category: "design",
  attributes: {
      cardTitle: { type: "string" },
      cardDescription: { type: "string" },
      cardImage: { 
          type: 'string',
          source: 'attribute',
          selector: 'img',
          attribute: 'src', 
      },
      buttonUrl: {
          type: 'string',
          source: 'attribute',
          attribute: 'src',
      },

  },
  edit: EditComponent,
  save: function() {
      return (
        <p>Todaty the sky.</p>
      )
  }

})

function EditComponent(props) {
  return (
    <Flex className="flexbox-card-block">
      <FlexItem className="flexbox-card-block--items">
        <Card>
          <CardHeader>
            <CardMedia>
            <FormFileUpload variant="secondary" accept="image/*" onChange={ ( event ) => console.log( event.currentTarget.files ) } >
                Upload an image
            </FormFileUpload>
            </CardMedia>
          </CardHeader>
          <CardBody>
            <Heading>
              <TextControl label="Heading:" style={{fontSize: "20px"}} />
            </Heading>
            <TextareaControl label="Content:" />
          </CardBody>
          <CardFooter>
            <TextControl label="View more button link:" />
          </CardFooter>
        </Card>
        <Button variant="primary" className="flexbox-card-block--button">
          <Icon icon="trash" />
          Remove card
        </Button>
      </FlexItem>
      <FlexItem>
        <Button>
          <Icon icon="plus" />
        </Button>
      </FlexItem>
    </Flex>
  )
}