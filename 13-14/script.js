document.addEventListener('DOMContentLoaded', () => {
  // Задание 2.1 – Получить ссылки
  const links = document.querySelectorAll('a');

  // Задание 2.2 – Вывести через 1 секунду
  setTimeout(() => {
    console.log('Ссылки на странице:');
    links.forEach(link => console.log(link.href));
  }, 1000);

  // Задание 2.3 – Удалить изображение по клику
  const imageToRemove = document.getElementById('image-to-remove');
  if (imageToRemove) {
    imageToRemove.addEventListener('click', () => {
      imageToRemove.remove();
    });
  }

  // Задание 3 – Изменение стиля
  const changeBtn = document.getElementById('change-style-btn');
  changeBtn.addEventListener('click', () => {
    document.body.classList.add('style-changed');
  });

  // Задание 4 – Глубина цвета
  const colorDepth = window.screen.colorDepth;
  const newWin = window.open('', '', 'width=800,height=600,scrollbars=no');
  if (newWin) {
    newWin.document.write(`<h1>Глубина цвета экрана: ${colorDepth} бит на пиксель</h1>`);
    newWin.document.close();
  }

  // Задание 5 – Валидация второй формы "Образование и Работа"
  const form = document.getElementById('education-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Сброс ошибок
    form.querySelectorAll('.error-message').forEach(span => {
      span.textContent = '';
    });
    form.querySelectorAll('input, select').forEach(el => {
      el.classList.remove('invalid');
    });

    let isValid = true;

    // Функция для установки ошибки
    function setError(elem, msg) {
      isValid = false;
      elem.classList.add('invalid');
      const errSpan = elem.parentElement.querySelector('.error-message');
      if (errSpan) errSpan.textContent = msg;
    }

    // Проверка select 'Информация об образовании'
    const educationInfo = document.getElementById('education-info');
    if (!educationInfo.value) {
      setError(educationInfo, 'Пожалуйста, выберите информацию об образовании');
    }

    // Проверка select 'Информация о трудоустройстве'
    const employmentInfo = document.getElementById('employment-info');
    if (!employmentInfo.value) {
      setError(employmentInfo, 'Пожалуйста, выберите информацию о трудоустройстве');
    }

    // Проверка текстового поля 'Наименование учебного заведения'
    const institutionName = document.getElementById('institution-name');
const institutionVal = institutionName.value.trim();

if (!institutionVal) {
  // поле пустое — ошибка
  institutionName.nextElementSibling.textContent = 'Это поле обязательно';
  institutionName.classList.add('invalid');
} else if (!/^[а-яёА-ЯЁa-zA-Z\s]+$/.test(institutionVal)) {
  // если есть символы, кроме букв и пробелов — ошибка
  institutionName.nextElementSibling.textContent = 'Только буквы и пробелы разрешены';
  institutionName.classList.add('invalid');
} else {
  // валидно
  institutionName.nextElementSibling.textContent = '';
  institutionName.classList.remove('invalid');
}

    // Проверка select 'Регион'
    const region = document.getElementById('region');
    if (!region.value) {
      setError(region, 'Пожалуйста, укажите регион');
    }

    // Проверка текстового поля 'Населённый пункт'
    const city = document.getElementById('city');
const cityValue = city.value.trim();
if (!cityValue) {
  setError(city, 'Это поле обязательно для заполнения');
} else if (cityValue.length < 6 || cityValue.length > 12) {
  setError(city, 'Длина должна быть от 6 до 12 символов');
}

    // Проверка месяца поступления
    const monthAdmission = document.getElementById('month-admission');
    if (!monthAdmission.value) {
      setError(monthAdmission, 'Пожалуйста, выберите месяц');
    }

    // Проверка года поступления
    const yearAdmission = document.getElementById('year-admission');
    if (!yearAdmission.value) {
      setError(yearAdmission, 'Пожалуйста, выберите год');
    }

    if (isValid) {
      alert('Форма успешно отправлена!');
      form.reset();
    }
  });
});
