var ActiveDirectory = require('activedirectory');
var config = {
  url: ['ldap://aaa.bbb.ccc.ddd'],
  baseDN: 'dc=domaincontrol,dc=local',
  username: 'usuario_com_permissao_consulta@domaincontrol.local',
  password: 'senha_usuario_com_permissao_consulta'
};
var ad = new ActiveDirectory(config);
var username = 'quero_consultar@domaincontrol.local';
var password = 'senha_quero_consultar';

ad.authenticate(username, password, function(err, auth) {
  if (err) {
    console.log('ERROR: '+JSON.stringify(err));
    return;
  } else if (auth) {
    console.log('Usuário autenticado!');
  } else {
    console.log('Falha na autenticação!');
  }
});
