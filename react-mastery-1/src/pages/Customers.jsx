import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {
    const selectionsettings = { persistSelection: true };
    const toolbarOptions = ['Delete'];
    const editing = { allowDeleting: true, allowEditing: true };

    return (
        <div>
            <Header category="Page" title="Customers"/>
            <GridComponent
                dataSource={customersData}
                enableHover={false}
                allowPaging
                pageSettings={{ pageCount: 5 }}
                selectionSettings={selectionsettings}
                toolbar={toolbarOptions}
                editSettings={editing}
                allowSorting
            >
                <ColumnsDirective>
                    {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
                </ColumnsDirective>

                <Inject services={[Page, Edit, Selection, Toolbar, Sort, Filter]}/>

            </GridComponent>
        </div>
    )
}

export default Customers