import React from "react";
import PaymentSummary from "../components/payments/PaymentSummary.jsx";
import PaymentForm from "../components/payments/PaymentForm.jsx";
import PaymentTable from "../components/payments/PaymentTable.jsx";

function Payments() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Payments</h1>
        <p className="text-sm text-slate-400 mt-1">
          Track and record monthly rent payments.
        </p>
      </div>

      <PaymentSummary />
      <PaymentForm />
      <PaymentTable />
    </div>
  );
}

export default Payments;