import csjs from 'csjs';
import insertCss from 'insert-css';
import colors from '../../themes/colors';

interface IStyles {
  container: string;
  well: string;
  glowingText: string;
  visibleWell: string;
  supriseWell: string;
}

export const styles: IStyles = csjs`

  .container {
    text-align: center;
  }
  .glowingText {
    color: ${colors.textColor};
    text-shadow: ${colors.textColor} 0 0 10px;
    white-space: nowrap;
  }
  .well {
    border-radius: 5px;
    border: 1px solid ${colors.borderColor};
    background-color: ${colors.backgroundColor};
    box-shadow: none;
  }
  .well:hover {
    box-shadow: 0 6px 20px 0 ${colors.shadowColor};
  }

  .visibleWell extends .well {
    margin: 0px 30px;
    opacity: 1;
    transition:
      margin 1s 0.5s,
      opacity 1s 0.5s,
      box-shadow 0.5s linear;
  }

  .supriseWell extends .well {
    margin: 0px 50px;
    opacity: 0;
    transition:
      margin 1s,
      opacity 1s,
      box-shadow 0.5s linear;
  }

  @media (max-width: 450px) {
    .supriseWell {
      margin: 0px 30px;
      opacity: 1;
      transition:
        margin 1s 0.5s,
        opacity 1s 0.5s,
        box-shadow 0.5s linear;
    }
    .visibleWell {
      margin: 0px 50px;
      opacity: 0;
      transition:
        margin 1s,
        opacity 1s,
        box-shadow 0.5s linear;
    }
  }

`;

insertCss(csjs.getCss(styles));
