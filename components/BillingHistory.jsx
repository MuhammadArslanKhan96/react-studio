import React from "react";
import { Space, Table, Tag } from "antd";

export default function BillingHistory() {
    const columns = [
        {
            title: "Plan",
            dataIndex: "name",
            key: "name",
            render: (text) => <a>{text}</a>,
        },
        {
            title: "Date",
            dataIndex: "age",
            key: "age",
        },
        {
            title: "Total",
            dataIndex: "address",
            key: "address",
        },
        {
            title: "Status",
            key: "tags",
            dataIndex: "tags",
            render: (_, { tags }) => (
                <>
                    {tags.map((tag) => {
                        let color = tag.length > 5 ? "geekblue" : "green";
                        if (tag === "loser") {
                            color = "volcano";
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: "Invoice & Receipt",
            key: "action",
            render: (_, record) => (
                <Space size="middle">
                    <a>Invoice</a>
                </Space>
            ),
        },
    ];

    const data = [
        {
            key: "1",
            name: "Free Plan",
            age: "Aug 14,2023",
            address: "$0",
            tags: ["paid"],
        },
    ];

    return (
        <div>
            <div>
                <p className="text-[20px] text-[#EFEFEF] font-semibold">Billing History</p>
            </div>
            <div className="mt-4 border border-[#44444A] rounded-[10px]">
                <Table columns={columns} dataSource={data} />
            </div>
        </div>
    );
}
