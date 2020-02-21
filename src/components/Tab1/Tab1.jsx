import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
  CheckBoxWrapper,
  CheckBox,
  CheckBoxLabel,
  WarningMessage
} from '../../styledComponents';
import { addElement, deleteElement } from '../../actions';
import { connect } from 'react-redux';

class Tab1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      element: '',
      searchedElement: '',
      isToggled: false
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onAdd = e => {
    e.preventDefault();
    this.props.add(this.state.element);
    this.setState({ element: '' });
  };

  onDelete = element => {
    this.props.delete(element);
  };

  onToggle = () => {
    this.setState({ isToggled: !this.state.isToggled });
  };

  render() {
    const { element, searchedElement, isToggled } = this.state;
    const { elements } = this.props;

    const isExisting = elements.indexOf(element) > -1 ? true : false;
    const isLesserChar = !element.length || element.length >= 5 ? false : true;

    const elementsFiltered = isToggled
      ? elements.filter((element, index) => !(index % 2))
      : elements;

    const elementSearch = elementsFiltered.filter(string => {
      let searchString = searchedElement.toLowerCase().split(' ');
      let containsAtLeastOneWord = false;
      // If at least a word is matched return it!
      searchString.forEach(word => {
        if (string.toLowerCase().includes(word)) containsAtLeastOneWord = true;
      });
      if (containsAtLeastOneWord) return string;
    });

    const elementsList = elementSearch.map(element => (
      <li key={element}>
        {element}
        <span
          className="close"
          onClick={() => {
            this.onDelete(element);
          }}
        >
          &times;
        </span>
      </li>
    ));

    const errorMessage = isLesserChar ? (
      <WarningMessage color={'orange'}>
        <strong>Warning!</strong> Name of the element must five characters or
        more
      </WarningMessage>
    ) : isExisting ? (
      <WarningMessage color={'red'}>
        <strong>Error!</strong> Element already exists.
      </WarningMessage>
    ) : null;

    return (
      <Grid>
        {errorMessage}
        <Row>
          <Col size={1}>
            <Row>
              <Col size={2}>
                <input
                  className={'textInputField'}
                  type={'text'}
                  name={'element'}
                  value={element}
                  onChange={this.onChange}
                />
              </Col>
              <Col size={1}>
                <div
                  disabled={isExisting || isLesserChar}
                  className={'addButton'}
                  onClick={this.onAdd}
                >
                  Add
                </div>
              </Col>
            </Row>
          </Col>
          <Col size={1}>
            <Row>
              <Col size={2}>
                <input
                  placeholder={'Search...'}
                  className={'textInputField'}
                  type={'text'}
                  name={'searchedElement'}
                  value={searchedElement}
                  onChange={this.onChange}
                />
              </Col>
              <Col size={1}>
                <CheckBoxWrapper>
                  <CheckBox
                    id="checkbox"
                    type="checkbox"
                    onClick={() => {
                      this.onToggle();
                    }}
                  />
                  <CheckBoxLabel htmlFor="checkbox" />
                </CheckBoxWrapper>
              </Col>
            </Row>
          </Col>
        </Row>
        <ul>{elementsList}</ul>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    elements: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    add: element => dispatch(addElement(element)),
    delete: element => dispatch(deleteElement(element))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tab1);
