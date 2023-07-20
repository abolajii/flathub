import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSubscriptionPlans } from "../../../redux/profile/profile.selector";
import {
  getSubscriptionPlans,
  intializePayment,
} from "../../../redux/profile/profileSlice";

const SubscriptionPlans = ({
  fetchSubscriptionPlans,
  plans,
  intializePayment,
}) => {
  useEffect(() => {
    fetchSubscriptionPlans();
  }, [fetchSubscriptionPlans]);

  return (
    <>
      <div class="py-12 bg-white">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="max-w-md">
            <p class="text-lg font-bold text-gray-900">Subscription Plans</p>
            <p class="mt-1 text-sm font-medium text-gray-500">
              Select one of the sibscirption plan to create a profile for your
              business.
            </p>
          </div>

          <hr class="mt-8 border-gray-200" />
        </div>
      </div>

      <section class="py-12 bg-white sm:py-16 lg:py-20">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="grid grid-cols-1 gap-5 text-center md:grid-cols-2 sm:text-left">
            {plans?.items?.map((plan) => (
              <div key={plan.id} class="relative overflow-hidden group">
                <div class="absolute inset-0">
                  <img
                    class="object-cover w-full h-full transition-all duration-300 group-hover:scale-125 group-hover:rotate-3"
                    src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/categories/3/summer-men-collection.png"
                    alt=""
                  />
                </div>

                <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                <div class="relative aspect-w-3 aspect-h-4 lg:aspect-w-1 lg:aspect-h-1">
                  <div class="flex items-end justify-center">
                    <div class="px-4 py-8 sm:px-6 lg:px-10">
                      <h3 class="text-2xl font-bold text-white lg:text-3xl">
                        {plan.name} - {plan.numberOfProperty + " Property"}{" "}
                      </h3>
                      <p class="mt-4 text-base font-normal text-white">
                        {plan.description} - {plan.numberOfUsers + " Users"}
                      </p>

                      <div class="mt-8">
                        <a
                          href="#"
                          onClick={async () => {
                            const pay = await intializePayment(plan.id);
                            window.open(pay.data.authorization_url, "_self");
                          }}
                          title=""
                          class="inline-flex items-center text-base font-bold text-white"
                          role="button"
                        >
                          Explore Now ({plan.price})
                          <svg
                            class="w-6 h-6 ml-2 transition-all duration-200 group-hover:translate-x-1"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                          <span
                            class="absolute inset-0"
                            aria-hidden="true"
                          ></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  plans: selectSubscriptionPlans,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSubscriptionPlans: () => dispatch(getSubscriptionPlans()),
    intializePayment: (subId) => dispatch(intializePayment(subId)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionPlans);
