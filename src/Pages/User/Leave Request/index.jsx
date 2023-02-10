import Layout from "../../../layout";
import Button from "../../../components/button";
import Table from "../../../components/table";
import { column, data } from "../../../Test";
import './index.css'


export default function LeaveRequest({page_data}) {
    const Tab = {
        parent: "Leave Request",
        child: undefined
    }
    return (
        <Layout tab={Tab} content={
            <div className="requestContent">
                <div>
                    <Button btnType="dark" children="Send Request">

                    </Button>
                </div>

                <div>
                    <Table tableHead={column} data={data}>

                    </Table>
                </div>
            </div>
            }
        >

        </Layout>
    );
}