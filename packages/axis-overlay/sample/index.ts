import { Connection, Protocol } from 'axis-core';
import * as overlay from './overlay';

(async () => {
    const connection = new Connection(Protocol.Http, '<ip address>', 80,
    'root', '<password>');

    await overlay.run(connection);
})();
