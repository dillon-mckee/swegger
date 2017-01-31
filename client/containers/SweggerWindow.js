import React from 'react';
import { connect } from 'react-redux';
import { fetchData, openModal, closeModal } from '../redux/actions';
import GetButton from '../components/GetButton';
const Modal = require('react-modal');

// Style for modal contents
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

export class SweggerWindow extends React.Component {
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
                                <h2>Redux Modal Count: {this.props.modalCount}</h2>
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
        isModalOpen: state.sweggerReducer.sweggerReducer.isModalOpen,
        hireMeText: state.sweggerReducer.sweggerReducer.hireMeText,
        portfolioURL: state.sweggerReducer.sweggerReducer.portfolioURL,
        modalCount: state.sweggerReducer.sweggerReducer.modalCount
    };
};

export default connect(mapStateToProps)(SweggerWindow);
