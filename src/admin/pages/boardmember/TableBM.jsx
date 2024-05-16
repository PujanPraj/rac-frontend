import React from "react";
import BMTable from "../../components/boardMember/BMTable";
import Heading from "../../components/Heading";

const TableBM = () => {
  return (
    <div>
      <Heading title={"Edit Board Members"} />
      <BMTable />
    </div>
  );
};

export default TableBM;
