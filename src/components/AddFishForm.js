import React from 'react';

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imagesRef = React.createRef();

  createFish = (event) => {
    // 1. stop the form form submitting
    event.preventDefault();
    // 2. pull values from input

    const fish = {
      nameRef : this.nameRef.value,
      priceRef : parseFloat(this.priceRef.value), //1054 cents, no decimals
      statusRef : this.statusRef.value,
      descRef : this.descRef.value,
      imagesRef : this.imagesRef.value
    }
    this.props.addFish(fish);
    // refresh the form
    event.currentTarget.reset();

  }
  render() {
    return (

      <form className="fish-edit" onSubmit= {this.createFish}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <input name="price" ref={this.priceRef} type="text" placeholder="Price" />
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>

        </select>
        <textarea name="desc" ref={this.descRef} placeholder="Desc"></textarea>
        <input name="image" ref={this.imagesRef} type="text" placeholder="Image" />
        <button type="submit"> +Add Fish</button>
      </form>


    )

  }
}

export default AddFishForm;
