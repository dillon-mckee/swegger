import React from 'react';
import { connect } from 'react-redux';
import { fetchData, openModal, closeModal } from '../redux/actions';
import GetButton from '../components/GetButton';
const Modal = require('react-modal');

{/*Style for Modal Content*/}
let customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class SweggerWindow extends React.Component {
    constructor(props) {
      super(props);
      this.getDataAndOpenModal = this.getDataAndOpenModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
  }

    getDataAndOpenModal(){
        this.props.dispatch(fetchData())
        .then(this.props.dispatch(openModal()));
    }

    closeModal(){
    this.props.dispatch(closeModal());
    }

    render() {
        return(
        <div className='swegger-window'>
                <GetButton onClick={this.getDataAndOpenModal}/>
                {/*Ternary operator to prevent the creation of multiple instances of modals.*/}
                {this.props.isModalOpen
                        ? <div>
                            <Modal isOpen={this.props.isModalOpen} onRequestClose={this.closeModal} contentLabel="HireMeModal" style={customStyles}>
                                <h2>{this.props.hireMeText}</h2>
                                <h2>{this.props.portfolioURL}</h2>
                            </Modal>
                        </div>
                    : null}
        </div>
        )
}
};

function mapStateToProps(state, props) {
    return {
        isModalOpen: state.isModalOpen,
        hireMeText: state.hireMeText,
        portfolioURL: state.portfolioURL
    };
};

export default connect(mapStateToProps)(SweggerWindow);
