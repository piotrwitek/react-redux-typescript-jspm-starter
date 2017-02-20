import csjs from 'csjs';
import insertCss from 'insert-css';
import colors from '../../theme/colors';
import dimensions from '../../theme/dimensions';

const Styles = {

  // COMPONENTS
  /** text with fancy highlight */
  cText__glowing: `.cText__glowing {
    color: ${colors.textColor};
    text-shadow: ${colors.textColor} 0 0 10px;
    white-space: nowrap;
  }`,

  // UTILITIES
  /** centered text */
  uCentered: `.uCentered {
    text-align: center;
  }`,
  /** dark background with border */
  uBordered: `.uBordered {
    border-radius: 5px;
    border: 1px solid ${colors.borderColor};
    background-color: ${colors.backgroundColor};
  }`,
  /** hide element on certain screen width */
  uHideOnTablet: `.uHideOnTablet {
    margin: 0px 30px;
    opacity: 1;
    transition:
      margin 1s 0.5s,
      opacity 1s 0.5s;
  }
  @media (max-width: ${dimensions.tablet}) {
    .uHideOnTablet {
      margin: 0px 50px;
      opacity: 0;
      transition:
        margin 1s,
        opacity 1s,
        box-shadow 0.5s linear;
    }
  }`,
  /** show element on certain screen width */
  uShowOnTablet: `.uShowOnTablet {
    margin: 0px 50px;
    opacity: 0;
    transition:
      margin 1s,
      opacity 1s;
  }
  @media (max-width: ${dimensions.tablet}) {
    .uShowOnTablet {
      margin: 0px 30px;
      opacity: 1;
      transition:
        margin 1s 0.5s,
        opacity 1s 0.5s,
        box-shadow 0.5s linear;
    }
  }`,

  // SPECIAL EFFECTS
  /** elevate element using box-shadow */
  eElevate: `.eElevate {
    box-shadow: none;
    transition: box-shadow 0.6s ease-out;
  }
  .eElevate:hover {
    box-shadow: 0 6px 20px 0 ${colors.shadowColor};
  }`,

};

const css = Object.values(Styles).reduce((accumulator, cssClass) => accumulator + cssClass, '');

const styles: typeof Styles = csjs`${css}`;

insertCss(csjs.getCss(styles));

export default styles;
