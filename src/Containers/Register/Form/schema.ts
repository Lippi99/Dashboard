import * as yup from 'yup';

export const schema = yup.object({
  name: yup.string().required("Informe o seu nome"),
  email: yup.string().email().required("Informe o seu email"),
  birth: yup.string().required("Informe a data de nascimento"),
  gender: yup.string().required("Informe o seu gênero"),
  password: yup.string().required("Informe sua senha"),
  passwordConfirm: yup.string().oneOf([yup.ref('password'), null], "Senhas não coincidem").required("Informe sua senha")
});