import Mail from '../lib/Mail';

export default {
    key: 'RegistrationMail',
    async handle(data) {

        console.log(data.data);

        const { user } = data.data;

        await Mail.sendMail({
            from: 'Queue Test <queue@queuetes.com.br',
            to: `${user.name} <${user.email}>`,
            subject: 'cadastro de usuário',
            html: `Olá, ${user.name}, bem-vindo ao sistema de filas da RocketSeat :D`
        });
    },
}