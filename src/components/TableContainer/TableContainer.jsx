import React from "react";
import { Button } from "../../components/Button";
import { FullTable } from "../../components/FullTable";
import { NameFilterLines } from "../../components/NameFilterLines";
import { NameSearchColor } from "../../components/NameSearchColor";
import { NameXCloseColor } from "../../components/NameXCloseColor";
import "./style.css";

export const TableContainer = ({ jobs, setNumSelected, selectedJobIndexes, setSelectedJobIndexes }) => {
  return (
    <div className="table-container">
      <div className="table-card">
        <div className="filter-search">
          <div className="filters">
            <Button
              className="button-3"
              color="secondary"
              override1={
                <NameXCloseColor className="design-component-instance-node-3"
                nameXCloseColor="/img/icons-10@2x.png"
                />
              }
              showIconLeft={false}
              text="All time"
            />

            <Button
              className="button-3"
              color="gray"
              divClassName="button-4"
              override1={
                <NameFilterLines className="name-filter-lines-color-default"  />
              }
              showIconLeft={false}
              showIconRight={true}
              text="More filters"
            />  
          </div>
          <div className="frame-wrapper">
            <div className="frame-4">
              <NameSearchColor className="name-search-color-default" />
              <input className="input" />
            </div>
          </div>
        </div>
        <div className="table-border">
          <FullTable setNumSelected={setNumSelected}
            className="full-table-instance" jobs={jobs}
            rowWrapperRowCellRowCellIconEllipsisVIconEllipsisVClassName="design-component-instance-node-3"
            selectedJobIndexes={selectedJobIndexes}
      setSelectedJobIndexes={setSelectedJobIndexes}
          />
        </div>
      </div>
    </div>
  );
};
