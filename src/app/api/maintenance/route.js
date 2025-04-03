// app/api/maintenance/route.js
import { NextResponse } from "next/server";

export const config = {
    runtime: "edge", // Edge function
};

export function GET() {
    const requests = [
        { id: 1, issue: "Leaking roof", status: "Pending" },
        { id: 2, issue: "Broken elevator", status: "In Progress" },
        { id: 3, issue: "Parking gate malfunction", status: "Resolved" },
    ];

    return NextResponse.json(requests);
}
