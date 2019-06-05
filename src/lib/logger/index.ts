import correlator from 'correlation-id';

interface ILogger {
  error(id: string, message: string, payload?: object): void;
  warn(id: string, message: string, payload?: object): void;
  info(id: string, message: string, payload?: object): void;
  verbose(id: string, message: string, payload?: object): void;
  debug(id: string, message: string, payload?: object): void;
  silly(id: string, message: string, payload?: object): void;
}

class Index implements ILogger {
  error(id: string, message: string, payload: object = {}) {
    console.error(`[ERROR][${id}] ${message}`, JSON.stringify(assignDefaultProperties(payload)));
  }

  warn(id: string, message: string, payload: object = {}) {
    console.warn(`[WARN][${id}] ${message}`, JSON.stringify(assignDefaultProperties(payload)));
  }

  info(id: string, message: string, payload: object = {}) {
    console.log(`[INFO][${id}] ${message}`, JSON.stringify(assignDefaultProperties(payload)));
  }

  verbose(id: string, message: string, payload: object = {}) {
    console.log(`[VERBOSE][${id}] ${message}`, JSON.stringify(assignDefaultProperties(payload)));
  }

  debug(id: string, message: string, payload: object = {}) {
    console.debug(`[DEBUG][${id}] ${message}`, JSON.stringify(assignDefaultProperties(payload)));
  }

  silly(id: string, message: string, payload: object = {}) {
    console.debug(`[SILLY][${id}] ${message}`, JSON.stringify(assignDefaultProperties(payload)));
  }
}

const assignDefaultProperties = (paylod: object) : object => {
  const defaults = {
    correlationId: correlator.getId(),
  };

  return Object.assign({}, paylod, defaults);
};

export default new Index();

