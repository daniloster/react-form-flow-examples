import { SchemaBuilder } from '../src';
import hasValue from "./hasValue";

SchemaBuilder.factory("max-length", ({ value, max }) => !hasValue(value ?? "") || (value ?? "").length <= max);
SchemaBuilder.factory("min-length", ({ value, min }) => !hasValue(value ?? "") || (value ?? "").length >= min);
SchemaBuilder.factory("required-array", ({ value }) => hasValue(value) && typeof value.forEach === "function" && value.length >= 0);
SchemaBuilder.factory("required", ({ value }) => hasValue(value ?? "") && (value ?? "").length >= 0);

export default SchemaBuilder;
