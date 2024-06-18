export default function (error) {
    switch (error) {
        case 'To signup, please provide your email':
            return 'Для регистрации введите E-Mail'
        case 'Signup requires a valid password':
            return 'Для регистрации введите действительный пароль'
        case 'User already registered':
            return 'Пользователь уже зарегистрирован'
        case 'Only an email address or phone number should be provided on signup.':
            return 'Для регистрации должен быть предоставлень E-Mail или номер телефона'
        case 'Signups not allowed for this instance':
            return 'Регистрация запрещена'
        case 'Email signups are disabled':
            return 'Регистрация через E-Mail запрещена'
        case 'Email link is invalid or has expired':
            return 'Авторизационная ссылка запрещена или прострочена'
        case 'Token has expired or is invalid':
            return 'Срок действия токена истек или он недействителен'
        case 'The new email address provided is invalid':
            return 'Новый указанный E-Mail является недействительным'
        case 'Password should be at least 6 characters':
            return 'Пароль должен содержать как минимум 6 символов'
        case 'Invalid login credentials':
            return 'Неверные данные для входа в систему'
    }
}
