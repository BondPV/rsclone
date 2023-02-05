import './AutorisationForm.scss';
import createElement from '../../utils/createElement';
import { ClassMap } from '../../constants/htmlConstants';
import { Dictionary, DictionaryKeys } from '../../constants/dictionary';
import { LANG } from '../../types/types';

class AutorisationForm {
  constructor(private lang: LANG) {
  }

  public create(): HTMLElement {
    const form = createElement({ tag: 'form', classList: [ClassMap.autorisation.form, ClassMap.mode.light.background] });

    const inputContainerEmail = createElement({
      tag: 'div',
      classList: [ClassMap.autorisation.formItem],
    });
    const inputEmailLable = createElement({
      tag: 'span',
      key: DictionaryKeys.authorizationEmail,
      content: Dictionary[this.lang].authorizationEmail,
    });
    const inputEmail = createElement({
      tag: 'input',
      classList: [ClassMap.autorisation.inputEmail],
    }) as HTMLInputElement;
    inputEmail.type = 'text';
    inputContainerEmail.append(inputEmailLable, inputEmail);

    const inputContainerPassword = createElement({
      tag: 'div',
      classList: [ClassMap.autorisation.formItem],
    });
    const inputPasswordLable = createElement({
      tag: 'span',
      key: DictionaryKeys.authorizationPassword,
      content: Dictionary[this.lang].authorizationPassword,
    });
    const inputPassword = createElement({
      tag: 'input',
      classList: [ClassMap.autorisation.inputPassword],
    }) as HTMLInputElement;
    inputEmail.type = 'password';
    const hidingPassword = createElement({
      tag: 'div',
      classList: [ClassMap.autorisation.hidingPassword],
    });
    inputContainerPassword.append(inputPasswordLable, inputPassword, hidingPassword);

    const registrationInvitation = createElement({
      tag: 'div',
      classList: [ClassMap.autorisation.registration],
    });
    const invitationText = createElement({
      tag: 'span',
      classList: [ClassMap.autorisation.registrationText],
      key: DictionaryKeys.registrationLinkText,
      content: Dictionary[this.lang].registrationLinkText,
    });
    const invitationLink = createElement({
      tag: 'span',
      classList: [ClassMap.autorisation.registrationLink, ClassMap.mode.light.font],
      key: DictionaryKeys.signUpButton,
      content: Dictionary[this.lang].signUpButton,
    });
    registrationInvitation.append(invitationText, invitationLink);

    const signInButton = createElement({
      tag: 'button',
      classList: [ClassMap.autorisation.signInButton],
      key: DictionaryKeys.signInButton,
      content: Dictionary[this.lang].signInButton,
    }) as HTMLButtonElement;

    form.append(inputContainerEmail, inputContainerPassword, registrationInvitation, signInButton);
    return form;
  }
}

export default AutorisationForm;
