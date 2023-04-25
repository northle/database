import { Encrypter, inject, PluginDefinition, Request } from '@northle/core';
import { DatabaseClient } from './database-client.service.js';

export const DatabasePlugin: PluginDefinition = {
  name: 'database',
  validationRules: [
    {
      name: 'password',
      errorMessage: 'Field :field must be a valid password',
      validate: async ([value]) => {
        const encrypter = inject(Encrypter);
        const db = inject(DatabaseClient);
        const request = inject(Request);

        const user = await db.user.findUnique({
          where: {
            email: request.input('email'),
          },
        });

        return user && encrypter.compareHash(value ?? '', user.password);
      },
    },
  ],
};
