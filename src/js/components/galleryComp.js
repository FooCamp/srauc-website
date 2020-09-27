import { createElement, createTagWithClasses, newContainer, newMultimedia, newText } from "../helpers/helpers";

const createPhotos = (galleryPhotos) => {
  const arrayPhotos = galleryPhotos.map((g_photo) => {
    const photo = newMultimedia('img', g_photo.src, g_photo.alt, ['gallery__photo']);

    return photo;
  });

  return arrayPhotos;
};

const galleryComp = (data) => {

  //Create icon close
  const galleryModalIcon = document.createElement('img');
  galleryModalIcon.classList.add('gallery__modal-icon')
  galleryModalIcon.src = "icon-close-blue-dark.svg";
  galleryModalIcon.alt = "Close button gallery viewer";

  //Create button close
  const galleryModalButton = document.createElement('button');
  galleryModalButton.classList.add('gallery__modal-button')
  galleryModalButton.type = 'button';

  //Insert icons within button
  galleryModalButton.appendChild(galleryModalIcon);

  //Create modal date
  const galleryModalDate = document.createElement('span');
  galleryModalDate.classList.add('gallery__modal-date', 'text', 'text-normal',);
  galleryModalDate.innerText = 'Fecha de la foto';

  //Create modal description
  const galleryModalDescription = document.createElement('p');
  galleryModalDescription.classList.add('gallery__modal-description', 'text', 'text-normal', 'text-normal--bold');
  galleryModalDescription.innerText = 'Descripción de la foto';

  //Create modal caption
  const galleryModalcaption = newContainer('figcaption', [galleryModalDescription, galleryModalDate], ['gallery__modal-caption']);

  //Create modal img
  const galleryModalImg = newMultimedia('img', 'gallery/gallery-2.jpg', 'Foto de la galería 1', ['gallery__modal-img']);

  // Create modal
  const galleryModal = newContainer('figure', [galleryModalImg, galleryModalcaption, galleryModalButton], ['gallery__modal']);

  //Create photos
  const photos = createPhotos(data.photos);

  //Create photos container
  const galleryPhotos = newContainer('div', photos, ['gallery__photos']);


  //create section headline
  const galleryHeadline = newText('h2', data.title, ['heading', 'heading-2', 'gallery__headline']);


  //Create gallery container
  const galleryContainer = newContainer('div', [galleryHeadline, galleryPhotos, galleryModal], ['gallery__container', 'grid']);

  //Create  gallery
  const gallery = newContainer('div', [galleryContainer], ['gallery'])

  return gallery;

}

export { galleryComp };
