import {FC} from "react";
import {CollectionsSaveRequestProps} from "./types.ts";
import {Button, DatePicker} from "antd";
import {add} from "../../../helpers";

const CollectionsSaveRequest:FC<CollectionsSaveRequestProps> = () => {
  console.log(add(1,2))
  return <div>
    <Button type={'primary'}>你好</Button>
    <DatePicker/>
  </div>
}
export default CollectionsSaveRequest;