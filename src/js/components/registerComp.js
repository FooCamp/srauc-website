import { newContainer, newText } from '../helpers/helpers';

const createInputs = (formInputs) => {
  const arrayInputs = formInputs.map((input) => {
    const formFieldLabel = newText('label', input.label, ['form__field-label']);

    const formFieldInput = document.createElement('input');
    formFieldInput.classList.add('form__field-input');
    formFieldInput.type = input.type;
    formFieldInput.placeholder = input.placeholder;

    const formField = newContainer('div', [formFieldLabel, formFieldInput], ['form__field']);

    return formField;
  });

  return arrayInputs;
};

const registerComp = (data) => {
  const formHeadline = newText('h6', data.headline, ['form__headline']);
  const formSubheadline = newText('p', '', ['form__subheadline']);
  formSubheadline.innerHTML = data.subheadline;
  const formInfo = newContainer('div', [formHeadline, formSubheadline], ['form__info']);

  const fields = createInputs(data.fields);
  const formGroupFields = newContainer('div', fields, ['form__group-fields']);

  const formIcon = document.createElement('img');
  formIcon.classList.add('form__icon');
  formIcon.src = data.buttonSend.image.src;
  formIcon.alt = data.buttonSend.image.alt;

  const formButtonIcon = document.createElement('button');
  formButtonIcon.classList.add('form__btn', 'form__btn-icon');
  formButtonIcon.type = 'submit';
  formButtonIcon.innerText = data.buttonSend.text;

  formButtonIcon.appendChild(formIcon);

  const formButtonBack = document.createElement('a');
  formButtonBack.classList.add('form__btn', 'form__btn-outline');
  formButtonBack.innerText = data.buttonBack.text;
  formButtonBack.href = data.buttonBack.href;

  const formWrapper = newContainer(
    'form',
    [formGroupFields, formButtonIcon, formButtonBack],
    ['form__wrapper'],
  );
  formWrapper.action = ' ';

  const formContainer = newContainer('div', [formInfo, formWrapper], ['form__container', 'grid']);
  const form = newContainer('section', [formContainer], ['form']);

  return form;
};

export { registerComp };
