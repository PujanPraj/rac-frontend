import React from "react";
import Heading from "../../components/Heading";
import MemberTable from "../../components/Member/BMTable";

const TableMembers = () => {
  return (
    <div>
      <Heading title={"Edit Member"} />
      <MemberTable />
    </div>
  );
};

export default TableMembers;
