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
  edit: function() {
      return (
        <div>
          <p>Hello</p>
          <h4>Title</h4>
        </div>
      )
  },
  save: function() {
      return (
        <p>Todaty the sky.</p>
      )
  }

})