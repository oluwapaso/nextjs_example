"use client"

import React, { createContext, useState } from 'react'
import LanguageSelector from '../language_selector'
import { CopyBlock, dracula } from "react-code-blocks";
import { ADD_LEAD_CURL, ADD_LEAD_GO, ADD_LEAD_NODEJS, ADD_LEAD_PHP, ADD_LEAD_RESPONSE, ADD_LEAD_VEHICLE_LIST } from '@/data/text_data';
import Link from 'next/link';
import { LanguageContext } from '@/app/contexts/context';

const AddNewLeads = () => {

    const [openedLibrary, setOpenedLibrary] = useState("CURL")

    var cb_params = {
        theme: dracula,
        codeBlock: true,
        language: "javascript",
        customStyle: {
            height: '400px',
            overflowY: 'scroll',
        },
        showLineNumbers: true,
        text: "",
    }

    var veh_cb_params = {
        ...cb_params,
        customStyle: {
            height: '200px',
            overflowY: 'scroll',
        },
        text: ADD_LEAD_VEHICLE_LIST,
    }

    var resp_cb_params = {
        ...cb_params,
        text: ADD_LEAD_RESPONSE,
    }

    const renderContent = () => {

        if (openedLibrary == "CURL") {

            cb_params.text = ADD_LEAD_CURL;
            return <CopyBlock {...cb_params} />

        } else if (openedLibrary == "PHP") {

            cb_params.text = ADD_LEAD_PHP;
            return <CopyBlock {...cb_params} />

        } else if (openedLibrary == "Node.js") {

            cb_params.text = ADD_LEAD_NODEJS;
            return <CopyBlock {...cb_params} />

        } else if (openedLibrary == "Go") {

            cb_params.text = ADD_LEAD_GO;
            return <CopyBlock {...cb_params} />

        }

    }

    var api_url = (process.env.NEXT_PUBLIC_API_URL as string);
    return (
        <LanguageContext.Provider value={{ openedLibrary, setOpenedLibrary }}>
            <div className="contents_area">
                <section>
                    <div>
                        <h2 className="font-bold text-xl font-poppings">Add New Lead</h2>
                    </div>
                    <div className="font-poppings mt-2">
                        To create a new lead, you create a <span className="higlight">lead object</span> and send it to the API endpoint
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
                                        <div className='w-full mt-1'><strong>Expected Value:</strong> leads/add-new</div>
                                    </td>
                                    <td className="arg_tbl_bdy">This is a constant value and the only accepted value to add a new lead is
                                        <span className='default-value'>leads/add-new</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="arg_tbl_bdy">lead_medium</td>
                                    <td className="arg_tbl_bdy">
                                        <div className='w-full'><span className='method_badge get_badge'>Yes</span></div>
                                        <div className='w-full mt-1'><strong>Expected Value:</strong> API-Source</div>
                                    </td>
                                    <td className="arg_tbl_bdy">This is a constant value and the only accepted value to add a new lead is
                                        <span className='default-value'>API-Source</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="arg_tbl_bdy">api_access_key</td>
                                    <td className="arg_tbl_bdy">
                                        <div className='w-full'><span className='method_badge get_badge'>Yes</span></div>
                                    </td>
                                    <td className="arg_tbl_bdy">
                                        <div className='w-full'>Replace <span className='font-bold text-blue-800'>[YOUR_API_KEY_HERE]</span> with the
                                            API access key from hauling desk lead source page @Manage Accounts/Lead
                                        </div>
                                        <div className='w-full mt-2'>
                                            <img src='/screenshot-5.png' />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="arg_tbl_bdy">fullname</td>
                                    <td className="arg_tbl_bdy">
                                        <div className='w-full'><span className='method_badge get_badge'>Yes</span></div>
                                    </td>
                                    <td className="arg_tbl_bdy">Shipper's fullname</td>
                                </tr>
                                <tr>
                                    <td className="arg_tbl_bdy">email</td>
                                    <td className="arg_tbl_bdy">
                                        <div className='w-full'><span className='method_badge get_badge'>Yes</span></div>
                                    </td>
                                    <td className="arg_tbl_bdy">Shipper's email. Must be in lowercase</td>
                                </tr>
                                <tr>
                                    <td className="arg_tbl_bdy">move_date</td>
                                    <td className="arg_tbl_bdy">
                                        <div className='w-full'><span className='method_badge get_badge'>Yes</span></div>
                                    </td>
                                    <td className="arg_tbl_bdy">The shipping date marks when the vehicle will be picked-up from pickup
                                        location. Preferred date format <strong className='text-blue-800'>YYYY-MM-DD</strong>.
                                        Example <span className='default-value text-blue-800'>2022-11-28</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="arg_tbl_bdy">phone</td>
                                    <td className="arg_tbl_bdy"><span className='method_badge delete_badge'>No</span></td>
                                    <td className="arg_tbl_bdy">Shipper's phone number. Preferred date format
                                        <strong className='ml-1 text-blue-800'>(111) 222-3333</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="arg_tbl_bdy">pickup_location</td>
                                    <td className="arg_tbl_bdy"><span className='method_badge delete_badge'>No</span></td>
                                    <td className="arg_tbl_bdy">Vehicle's pickup location. Preferred location format
                                        <strong className='ml-1 text-blue-800'>City, State Code, Zip Code</strong>. Example
                                        <strong className='ml-1 text-blue-800'>Bellefontaine, OH, 43311</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="arg_tbl_bdy">dropoff_location</td>
                                    <td className="arg_tbl_bdy"><span className='method_badge delete_badge'>No</span></td>
                                    <td className="arg_tbl_bdy">Vehicle's dropoff location. Preferred location format
                                        <strong className='ml-1 text-blue-800'>City, State Code, Zip Code</strong>. Example
                                        <strong className='ml-1 text-blue-800'>New York, NY, 10001</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="arg_tbl_bdy">transport_type</td>
                                    <td className="arg_tbl_bdy">
                                        <div className='w-full'><span className='method_badge get_badge'>Yes</span></div>
                                        <div className='w-full mt-1'><strong>Expected Value:</strong>
                                            Open, Enclosed or Driveaway
                                        </div>
                                    </td>
                                    <td className="arg_tbl_bdy">This is the type of trailer type that will be used to ship the vehicle,
                                        it can take any of these 3 values <strong className='text-blue-800'>Open</strong> or
                                        <strong className='text-blue-800 ml-1'>Enclosed</strong> or
                                        <strong className='ml-1 text-blue-800'>Driveaway</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="arg_tbl_bdy">vehicles</td>
                                    <td className="arg_tbl_bdy">
                                        <div className='w-full'><span className='method_badge get_badge'>Yes</span></div>
                                    </td>
                                    <td className="arg_tbl_bdy">This field expects the array of object of vehicles to ship.
                                        Example
                                        <CopyBlock {...veh_cb_params} />
                                        <div className='w-100'>
                                            <div className='w-100 mt-2'><strong>Running:</strong> value is either Yes or No</div>
                                            <div className='w-100 mt-1'><strong>Type:</strong> value could be
                                                Car, SUV, Pickup, Van, RV, Travel Trailer, Motorcycle, Boat, ATV, Heavy Equipment,
                                                Large Yacht or Other
                                            </div>
                                        </div>
                                    </td>
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

                    <div className='mt-10'>
                        <div>
                            <h2 className="font-bold text-xl font-poppings">Response Usage</h2>
                        </div>
                        <div className='mt-2'>
                            <div className='w-full'>
                                <strong>1. auto_quoted:</strong> this is a boolean and it's either <strong className='text-blue-800 ml-1 mr-1'>true</strong>
                                or <strong className='text-blue-800 ml-1'>false</strong>, this is true when a price is generated for the
                                lead immediately, and you will get <strong className='ml-1 text-blue-800'>quote_details_url</strong> and
                                <strong className='ml-1 text-blue-800'>book_order_url</strong> if this is true, and get
                                <strong className='ml-1 text-blue-800'>return_url</strong> if this is false, so if you are an in-house
                                developer it's better to redirect the shipper to the quote details url using the
                                <strong className='ml-1 text-blue-800'>quote_details_url</strong> link.
                            </div>
                        </div>
                        <div className='mt-2'>
                            <div className='w-full'>
                                <strong>2. auto_quote_price:</strong> this is an estimated amount generated to ship the vehicle(s)
                            </div>
                        </div>
                        <div className='mt-2'>
                            <div className='w-full'>
                                <strong>3. email_sent:</strong> this is a string and it's either <strong className='text-blue-800 ml-1 mr-1'>Yes</strong>
                                or <strong className='text-blue-800 ml-1'>No</strong>, this is Yes when an email is sent to the shipper if
                                the broker have the auto-responder option activated for API-Source
                            </div>
                        </div>
                        <div className='mt-2'>
                            <div className='w-full'>
                                <strong>4. quote_details_url:</strong> this is a string and it's either the default quote details url generated by
                                Hauling Desk or other custom quote details url provided in the endpoint settings. If you are an in-house developer
                                and you want to provide <strong className='text-blue-800 ml-1 mr-1'>Custom Quote Details URL</strong> you must
                                create a page on your server and provide it in the <strong className='text-blue-800 ml-1 mr-1'>settings/endpoints</strong>
                                page inside the Hauling Desk CRM
                            </div>
                            <div className='w-full mt-2'>
                                <img src='/screenshot-1.png' />
                            </div>
                            <div className='w-full mt-2'>
                                Example: if you created a link <strong className='text-blue-800 ml-1 mr-1'>https://my-web-domain.com/quote-details.php</strong>
                                a token will be appended to the end of the URL, so you must receive it through a get parameter. And you must update
                                the link in the <strong className='text-blue-800 ml-1 mr-1'>settings/endpoints</strong> page inside the Hauling Desk CRM to
                                <strong className='text-blue-800 ml-1 mr-1'>https://my-web-domain.com/quote-details.php?token=</strong>
                            </div>
                        </div>
                        <div className='mt-2'>
                            <div className='w-full'>
                                <strong>5. book_order_url:</strong> this is a string and it's either the default book order url generated by
                                Hauling Desk or other book order details url provided in the endpoint settings. If you are an in-house developer and you want to
                                provide <strong className='text-blue-800 ml-1 mr-1'>Custom Quote Details URL</strong> you must create a page on your
                                server and provide it in the <strong className='text-blue-800 ml-1 mr-1'>settings/endpoints</strong> page inside
                                the Hauling Desk CRM
                            </div>
                            <div className='w-full mt-2'>
                                <img src='/screenshot-2.png' />
                            </div>
                            <div className='w-full mt-2'>
                                Example: if you created a link <strong className='text-blue-800 ml-1 mr-1'>https://my-web-domain.com/book-order.php</strong>
                                a token will be appended to the end of the URL, so you must receive it through a get parameter. And you must update
                                the link in the <strong className='text-blue-800 ml-1 mr-1'>settings/endpoints</strong> page inside the Hauling Desk CRM to
                                <strong className='text-blue-800 ml-1 mr-1'>https://my-web-domain.com/book-order.php?token=</strong>
                            </div>
                        </div>
                        <div className='mt-2'>
                            <div className='w-full'>
                                <strong>6. return_url:</strong> this is a string and it's either the default thank you page url generated by
                                Hauling Desk or other thank you page url provided in the leadsource settings. Go to
                                <strong className='text-blue-800 ml-1 mr-1'>Manage Accounts / Lead Source </strong> and edit lead source with the
                                current API access key.
                            </div>
                            <div className='w-full mt-2'>
                                <img src='/screenshot-3.png' />
                            </div>
                            <div className='w-full mt-6'>
                                <strong className='mr-1'>Next:</strong>
                                <Link href="/endpoints/quotes/get-quote-details" className='text-blue-800'>How to get quote details</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </LanguageContext.Provider>
    )
}

export default AddNewLeads