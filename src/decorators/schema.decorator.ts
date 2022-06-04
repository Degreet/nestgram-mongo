import { ISchemaInfo, ISchemaOptionParams, ISchemaParams } from '../types/schema.types';
import { schemaStore } from '../types/SchemaStore';

export function Schema(params: ISchemaParams = {}): ClassDecorator {
  return (target: any): void => {
    const options: ISchemaOptionParams[] = schemaStore.getSchemaProperties(target) || [];

    const data: ISchemaInfo = {
      name: target.name,
      options,
      ...params,
    };

    Reflect.defineMetadata('schema', data, target);
  };
}
