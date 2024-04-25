import { useEffect } from "react";
import { RemoveRectangle } from "react-huge-icons/outline";
const Terms = ({ callback }) => {
  useEffect(() => {
    scrollTo({ top: 0, behavior: "smooth", left: 0 });
  }, []);
  return (
    <>
      <section className="h-screen relative max-sm:h-96 bg-gray-100 px-10 max-sm:px-2">
        <div className="flex mr-3 justify-end  items-center">
          <button className="mt-4 ml-0" onClick={callback}>
            <RemoveRectangle
              className="text-5xl max-sm:text-4xl text-gray-400 inline "
              onClick={() => callback()}
            />
          </button>
        </div>

        <h1 className="text-8xl  mt-2 font-extrabold  max-sm:text-4xl mb-2 ml-3">
          Terms of service.
        </h1>
        <div className="flex bg-gray-50 h-96 max-sm:h-auto  mt-4 flex-col justify-center items-center rounded-lg max-sm:px-4 px-3  max-sm:overflow-y-scroll">
          <p className="px-1 ">
            All loans are made by Cross River Bank, a New Jersey state chartered
            commercial bank, Member FDIC, Equal Housing Lender. All loans are
            unsecured, fully amortizing personal loans. Eligibility for a loan
            is not guaranteed. Please refer to our Disclosures and Licenses page
            for state-required disclosures, licenses, and lending restrictions.
            Qualified clients using Bucksloan will see loan options for a 3 or
            36 month term. An origination fee of up to 0.01% is charged for each
            loan. This fee is deducted from the balance before funds are
            disbursed to the client. For example, a 5-year $10,000 loan with a
            0.05% interest rate and a 0.05% ($167) origination fee would have 59
            scheduled monthly payments of approximately $167, for an APR of
            0.05%. Borrower must be a U.S. citizen or permanent U.S. resident at
            least 18 years of age. All loan applications are subject to credit
            review and approval and offered loan terms, requested amount,
            requested loan term. Not all borrowers receive the lowest interest
            rate. To qualify for the lowest rate, you must have valid government
            identity card, and select payment methods. Rates and Terms are
            subject to change at any time without notice. Ohio Residents: All
            loans to Ohio residents must be greater than $5,001. The Ohio laws
            against discrimination require that all creditors make credit
            equally available to all credit worthy customers, and that credit
            reporting agencies maintain separate credit histories on each
            individual upon request. The Ohio Civil Rights Commission
            administers compliance with this law. Married applicants may apply
            for a separate account. Same Day Funding available for clients
            completing the loan process and signing the Promissory Note by
            1:00PM ET on a business day. Also note, the direct deposit credit
            will be submitted to your bank the same business day. This may
            result in same day funding, but results may vary and your bank may
            have rules that limit our ability to credit your account. We are not
            responsible for delays which may occur due to incorrect routing
            number, account number, or errors of your financial institution.
          </p>
        </div>
        <div className="flex bg-gray-50 h-auto py-2 px-3 mt-2  justify-end items-center rounded-lg max-sm:px-4">
          <button
            onClick={callback}
            className="bg-black rounded-lg py-3 text-center text-white w-72  max-sm:w-full hover:bg-gray-900"
          >
            Accept
          </button>
        </div>
      </section>
    </>
  );
};

export default Terms;
