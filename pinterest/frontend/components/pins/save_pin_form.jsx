import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class SavePinForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      comment: this.props.pin.comment,
      url: this.props.pin.url,
      imageUrl: this.props.pin.imageUrl,
      image: this.props.pin.image,
      board_id: ''
    };
  }

  handleclick(val){
    return (e) => {
      this.setState({board_id: val});
    };
  }

  componentDidMount(){
    this.props.fetchBoards();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.board_id !== '' && prevState !== this.state) {
      let formData = new FormData();
      formData.append('pin[comment]', this.state.comment);
      formData.append('pin[url]', this.state.url);
      formData.append('pin[board_id]', this.state.board_id);
      if (this.state.image) {
        formData.append('pin[image]', this.state.image);
      }
      this.props.createPin(formData).then(() => this.props.closeModal());
    }
  }

  render(){
    const { boards } = this.props;
    return (
      <div className='create-pin-page'>
        <div className='create-pin-form'>
          <div className='create-pin-header'>
            <h1>Choose board</h1>
            <div className='close'>
              <span
                className='close-modal'
                onClick={() => this.props.closeModal()}>
                <i className='fas fa-times'></i>
              </span>
            </div>
          </div>

        <div className='form-left-board'>
          <div className='pin-upload-outer-ready'>
            <div className='thumbnail-outer'>
              <img className='img-thumbnail'
                   src={this.state.imageUrl}/>
            </div>
          </div>
        </div>
        <div className='form-right-board'>
          <form>
          <ul className='board-selection'>
            {boards.map((board, id) => {
              return (
                <li>
                  <img key={id} src=''/>
                <input
                  type='submit'
                  value={board.title}
                  onClick={this.handleclick(board.id)}/>
                <a className='save-btn-board'>
                    <i className="fas fa-thumbtack"></i>
                    <p>Save</p>
                  </a>
                </li>
                );
              }
            )}
          </ul>
          </form>
        <div
          className='board-info'
          onClick={() => this.props.openModal({modal: 'CreateBoard'} )}>
          <div id='plus-outer-save'>
            <i className='fa fa-plus'
              aria-hidden='true'></i>
          </div>
          <p>Create board</p>
        </div>
        </div>
        </div>
      </div>
    );
  }

}

export default withRouter(SavePinForm);
