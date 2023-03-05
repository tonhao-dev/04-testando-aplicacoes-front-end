// Actions ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Type
export const CLEAR_NOTIFICATION = 'CLEAR_NOTIFICATION';

// Creators
export const clearNotification = () => ({
  type: CLEAR_NOTIFICATION
});

// Constants
export const NOTIFICATION_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
};

export const MESSAGES = {
  DELETE: {
    SUCCESS: 'Usuário removido com sucesso',
    ERROR: 'Ocorreu um erro ao remover usuário'
  },
  AUTHENTICATE: {
    SUCCESS: 'Autenticado com sucesso',
    ERROR: 'Ocorreu um erro ao autenticar'
  },
  UPDATE: {
    SUCCESS: 'Perfil atualizado com sucesso',
    ERROR: 'Ocorreu um erro ao atualizar perfil',
  },
  CREATE: {
    SUCCESS: 'Perfil criado com sucesso',
    ERROR: 'Ocorreu um erro ao criar o perfil',
  },
  DEFAULT: {
    ERROR: 'Ocorreu um erro ao realizar operação'
  }
};
