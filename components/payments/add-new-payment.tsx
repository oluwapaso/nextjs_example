"use client"

import React, { createContext, useState } from 'react'
import LanguageSelector from '../language_selector'
import { CopyBlock, dracula } from "react-code-blocks";
import { ADD_PAYMENT_CURL, ADD_PAYMENT_GO, ADD_PAYMENT_NODEJS, ADD_PAYMENT_PHP, ADD_PAYMENT_RESPONSE } from '@/data/text_data';
import { LanguageContext } from '@/app/contexts/context';
import Link from 'next/link';

const AddNewPayment = () => {

    const [openedLibrary, setOpenedLibrary] = useState("CURL")

    var cb_params = {
        theme: dracula,
        codeBlock: false,
        language: "javascript",
        customStyle: {
            height: '400px',
            overflowY: 'scroll',
        },
        showLineNumbers: true,
        text: "",
    }

    var resp_cb_params = {
        ...cb_params,
        text: ADD_PAYMENT_RESPONSE,
        customStyle: {
            height: '200px',
            overflowY: 'scroll',
        },
    }

    const renderContent = () => {

        if (openedLibrary == "CURL") {

            cb_params.text = ADD_PAYMENT_CURL;
            return <CopyBlock {...cb_params} />

        } else if (openedLibrary == "PHP") {

            cb_params.text = ADD_PAYMENT_PHP;
            return <CopyBlock {...cb_params} />

        } else if (openedLibrary == "Node.js") {

            cb_params.text = ADD_PAYMENT_NODEJS;
            return <CopyBlock {...cb_params} />

        } else if (openedLibrary == "Go") {

            cb_params.text = ADD_PAYMENT_GO;
            return <CopyBlock {...cb_params} />

        }

    }

    var api_url = (process.env.NEXT_PUBLIC_API_URL as string);
    return (
        <LanguageContext.Provider value={{ openedLibrary, setOpenedLibrary }}>
            <div className="contents_area">
                <section>
                    <div>
                        <h2 className="font-bold text-xl font-poppings">Add New Payment</h2>
                    </div>
                    <div className="font-poppings mt-2">
                        If you are here, it means you have setup you custom order details url provided in the CRM's endpoint settings.
                    </div><div className='w-full mt-2'>
                        <img src='/screenshot-6.png' />
                    </div>
                    <div className='w-full mt-2'>
                        Example: if you created a link <strong className='text-blue-800 ml-1 mr-1'>https://my-web-domain.com/order-details.php</strong>
                        a token will be appended to the end of the URL, so you must receive it through a get parameter. And you must update
                        the link in the <strong className='text-blue-800 ml-1 mr-1'>settings/endpoints</strong> page inside the Hauling Desk CRM to
                        <strong className='text-blue-800 ml-1 mr-1'>https://my-web-domain.com/order-details.php?token=</strong>
                    </div>

                    <div className="font-poppings mt-6">
                        To add new payment, you create a <span className="higlight">new payment object</span> and send it to the API endpoint
                    </div>
                    <div className="code-area">
                        <div className="code-area-header">
                            <div><span className="method_badge post_badge">POST</span> <span className="api_url_link">{api_url}</span></div>
                            <LanguageSelector />
                        </div>
                        <div className="code-area-body">
                            <div className='font-semibold'>Example Request</div>
                            {renderContent()}
                        </div>
                    </div>
                </section>

                <section className='mt-12'>
                    <div>
                        <h2 className='font-bold text-xl font-poppings'>Arguments</h2>
                    </div>

                    <div className='mt-2'>
                        <table className="table-auto border-collapse w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm">
                            <thead className="bg-slate-50 dark:bg-slate-700">
                                <tr>
                                    <th className="args_tbl_hdr">Field</th>
                                    <th className="args_tbl_hdr">Required</th>
                                    <th className="args_tbl_hdr">Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="arg_tbl_bdy">resource</td>
                                    <td className="arg_tbl_bdy">
                                        <div className='w-full'><span className='method_badge get_badge'>Yes</span></div>
                                        <div className='w-full mt-1'><strong>Expected Value:</strong> payments/add-new-payment</div>
                                    </td>
                                    <td className="arg_tbl_bdy">This is a constant value and the only accepted value to add new payment
                                        is <span className='default-value'>payments/add-new-payment</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="arg_tbl_bdy">api_key</td>
                                    <td className="arg_tbl_bdy">
                                        <div className='w-full'><span className='method_badge get_badge'>Yes</span></div>
                                    </td>
                                    <td className="arg_tbl_bdy">
                                        <div className='w-full'>
                                            Replace <span className='font-bold text-blue-800'>[YOUR_API_KEY_HERE]</span> with the
                                            API key from Hauling Desk CRM settings page, under credentials section
                                        </div>
                                        <div className='w-full mt-2'>
                                            <img src='/screenshot-4.png' />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="arg_tbl_bdy">account_id</td>
                                    <td className="arg_tbl_bdy">
                                        <div className='w-full'><span className='method_badge get_badge'>Yes</span></div>
                                    </td>
                                    <td className="arg_tbl_bdy">
                                        <div className='w-full'>
                                            Replace <span className='font-bold text-blue-800'>[YOUR_ACCOUNT_ID_HERE]</span> with the
                                            Account ID from Hauling Desk CRM settings page, under credentials section
                                        </div>
                                        <div className='w-full mt-2'>
                                            <img src='/screenshot-4.png' />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="arg_tbl_bdy">order_token</td>
                                    <td className="arg_tbl_bdy">
                                        <div className='w-full'><span className='method_badge get_badge'>Yes</span></div>
                                    </td>
                                    <td className="arg_tbl_bdy">
                                        <div className='w-full'>
                                            Replace <span className='font-bold text-blue-800'>[ORDER_TOKEN_HERE]</span> with the Order token
                                            we appended to the end of your order details URL provided in the settings/endpoints page
                                        </div>
                                        <div className='w-full mt-2'>
                                            <img src='/screenshot-6.png' />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="arg_tbl_bdy">date_received</td>
                                    <td className="arg_tbl_bdy">
                                        <div className='w-full'><span className='method_badge get_badge'>Yes</span></div>
                                        <div className='w-full mt-1'><strong>Expected Value:</strong> Shipper To Broker, Shipper To Carrier, Broker To Carrier or Carrier To Broker</div>
                                    </td>
                                    <td className="arg_tbl_bdy">This is the date the payment was received. Preferred date format <strong className='text-blue-800'>YYYY-MM-DD H:m:s</strong>.
                                        Example <span className='default-value text-blue-800'>2022-11-28 21:10:15</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="arg_tbl_bdy">payment_from_to</td>
                                    <td className="arg_tbl_bdy">
                                        <div className='w-full'><span className='method_badge get_badge'>Yes</span></div>
                                        <div className='w-full mt-1'><strong>Expected Value:</strong> Shipper To Broker, Shipper To Carrier, Broker To Carrier or Carrier To Broker</div>
                                    </td>
                                    <td className="arg_tbl_bdy">This is type/source of payment.
                                        Accepted values includes <strong className="font-bold text-blue-800 mx-1">Shipper To Broker</strong>,
                                        <strong className="font-bold text-blue-800 mx-1">Shipper To Carrier</strong>,
                                        <strong className="font-bold text-blue-800 mx-1">Broker To Carrier</strong> or
                                        <strong className="font-bold text-blue-800 mx-1">Carrier To Broker</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="arg_tbl_bdy">amount</td>
                                    <td className="arg_tbl_bdy">
                                        <div className='w-full'><span className='method_badge get_badge'>Yes</span></div>
                                    </td>
                                    <td className="arg_tbl_bdy">This is the amout to be added.</td>
                                </tr>
                                <tr>
                                    <td className="arg_tbl_bdy">deposit_method</td>
                                    <td className="arg_tbl_bdy">
                                        <div className='w-full'><span className='method_badge get_badge'>Yes</span></div>
                                        <div className='w-full mt-1'><strong>Expected Value:</strong> Credit Card, Personal Check,
                                            Cashiers Check, Company Check, Comchek</div>
                                    </td>
                                    <td className="arg_tbl_bdy">This is the user payment method.</td>
                                </tr>
                                <tr>
                                    <td className="arg_tbl_bdy">transaction_id</td>
                                    <td className="arg_tbl_bdy">
                                        <div className='w-full'><span className='method_badge delete_badge'>No</span></div>
                                    </td>
                                    <td className="arg_tbl_bdy">This field applied to any of the deposit methods.</td>
                                </tr>
                                <tr>
                                    <td className="arg_tbl_bdy">authorization_code</td>
                                    <td className="arg_tbl_bdy">
                                        <div className='w-full'><span className='method_badge delete_badge'>No</span></div>
                                    </td>
                                    <td className="arg_tbl_bdy">This field applied to any of the deposit methods.</td>
                                </tr>
                                <tr>
                                    <td className="arg_tbl_bdy">cc_last_digits</td>
                                    <td className="arg_tbl_bdy">
                                        <div className='w-full'><span className='method_badge delete_badge'>No</span></div>
                                    </td>
                                    <td className="arg_tbl_bdy">This field only apply to Credit Card deposit method.</td>
                                </tr>
                                <tr>
                                    <td className="arg_tbl_bdy">cc_type</td>
                                    <td className="arg_tbl_bdy">
                                        <div className='w-full'><span className='method_badge delete_badge'>No</span></div>
                                        <div className='w-full mt-1'><strong>Expected Value:</strong> Visa, Mastercard, AMEX, Discover or
                                            Other</div>
                                    </td>
                                    <td className="arg_tbl_bdy">This field only apply to Credit Card deposit method.</td>
                                </tr>
                                <tr>
                                    <td className="arg_tbl_bdy">other_cc_type</td>
                                    <td className="arg_tbl_bdy">
                                        <div className='w-full'><span className='method_badge delete_badge'>No</span></div>
                                    </td>
                                    <td className="arg_tbl_bdy">This field only apply to Credit Card deposit method and expected if the cc_type
                                        above is Other.</td>
                                </tr>
                                <tr>
                                    <td className="arg_tbl_bdy">cc_expiration_month</td>
                                    <td className="arg_tbl_bdy">
                                        <div className='w-full'><span className='method_badge delete_badge'>No</span></div>
                                        <div className='w-full mt-1'><strong>Expected Value:</strong> January, February, March e.t.c</div>
                                    </td>
                                    <td className="arg_tbl_bdy">This field only apply to Credit Card deposit method.</td>
                                </tr>
                                <tr>
                                    <td className="arg_tbl_bdy">cc_expiration_year</td>
                                    <td className="arg_tbl_bdy">
                                        <div className='w-full'><span className='method_badge delete_badge'>No</span></div>
                                    </td>
                                    <td className="arg_tbl_bdy">This field only apply to Credit Card deposit method.</td>
                                </tr>
                                <tr>
                                    <td className="arg_tbl_bdy">check_number</td>
                                    <td className="arg_tbl_bdy">
                                        <div className='w-full'><span className='method_badge delete_badge'>No</span></div>
                                    </td>
                                    <td className="arg_tbl_bdy">This field applied to any of the Check deposit methods.</td>
                                </tr>
                                <tr>
                                    <td className="arg_tbl_bdy">receipt_link</td>
                                    <td className="arg_tbl_bdy">
                                        <div className='w-full'><span className='method_badge delete_badge'>No</span></div>
                                    </td>
                                    <td className="arg_tbl_bdy">This is the payment receipt link generated by your payment gateway.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className='mt-16'>
                    <div>
                        <h2 className="font-bold text-xl font-poppings">Example Response</h2>
                    </div>
                    <div className="code-area">
                        <div className="code-area-header">
                            <span>Success Example Response</span>
                        </div>
                        <div className="code-area-body">
                            <CopyBlock {...resp_cb_params} />
                        </div>
                    </div>
                    <div className='w-full mt-6'>
                        <strong className='mr-1'>Next:</strong>
                        <Link href="/endpoints/payments/add-payment-error" className='text-blue-800'>How to add/log payment error.</Link>
                    </div>
                </section>

            </div>
        </LanguageContext.Provider >
    )
}

export default AddNewPayment