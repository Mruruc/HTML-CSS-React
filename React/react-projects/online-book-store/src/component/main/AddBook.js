import React from 'react'

const AddBook = () => {
  return (
    <section>
      <form>
        <fieldset>
          <legend>Add New Book</legend>
          <input type='text' placeholder='Book Name' /> <br />
          <input type='text' placeholder='Book Author' /> <br />
          <input type='submit'  name='submit' />
        </fieldset>
      </form>
    </section>
  );
}

export default AddBook
