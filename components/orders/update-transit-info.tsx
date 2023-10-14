"use client"

import React, { createContext, useState } from 'react'
import LanguageSelector from '../language_selector'
import { CopyBlock, dracula } from "react-code-blocks";
import { ADD_LEAD_VEHICLE_LIST, UPDATE_ORDER_TRANSIT_CURL, UPDATE_ORDER_TRANSIT_GO, UPDATE_ORDER_TRANSIT_NODEJS, UPDATE_ORDER_TRANSIT_PHP, UPDATE_ORDER_TRANSIT_RESPONSE } from '@/data/text_data';
import { LanguageContext } from '@/app/contexts/context';
import Link from 'next/link';

const UpdateOrderTransitInfo = () => {

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
        customStyle: {
            height: '200px',
            overflowY: 'auto',
        },
        text: UPDATE_ORDER_TRANSIT_RESPONSE,
    }

    const renderContent = () => {

        if (openedLibrary == "CURL") {

            cb_params.text = UPDATE_ORDER_TRANSIT_CURL;
            return <CopyBlock {...cb_params} />

        } else if (openedLibrary == "PHP") {

            cb_params.text = UPDATE_ORDER_TRANSIT_PHP;
            return <CopyBlock {...cb_params} />

        } else if (openedLibrary == "Node.js") {

            cb_params.text = UPDATE_ORDER_TRANSIT_NODEJS;
            return <CopyBlock {...cb_params} />

        } else if (openedLibrary == "Go") {

            cb_params.text = UPDATE_ORDER_TRANSIT_GO;
            return <CopyBlock {...cb_params} />

        }

    }

    var api_url = (process.env.NEXT_PUBLIC_API_URL as string);
    return (
        <LanguageContext.Provider value={{ openedLibrary, setOpenedLibrary }}>
            <div className="contents_area">
                <section>
                    <div>
                        <h2 className="font-bold text-xl font-poppings">Update Order Transit Info</h2>
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
                        To update an order's transit info, you create a <span className="higlight">order transit object</span> and send it to
                        the API endpoint
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
                                        <div className='w-full mt-1'><strong>Expected Value:</strong> orders/update-transit-info</div>
                                    </td>
                                    <td className="arg_tbl_bdy">This is a constant value and the only accepted value to update quote transit
                                        info is <span className='default-value'>orders/update-transit-info</span>
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
                                    <td className="arg_tbl_bdy">move_on</td>
                                    <td className="arg_tbl_bdy">
                                        <div className='w-full'><span className='method_badge get_badge'>Yes</span></div>
                                    </td>
                                    <td className="arg_tbl_bdy">This is the shipping date and it marks when the vehicle will be picked-up from pickup location.
                                        Preferred date format <span className='font-bold text-blue-800'>YYYY-MM-DD</span>. Example
                                        <span className='default-value text-blue-800'>2022-11-28</span></td>
                                </tr>
                                <tr>
                                    <td className="arg_tbl_bdy">pickup_location</td>
                                    <td className="arg_tbl_bdy">
                                        <div className='w-full'><span className='method_badge get_badge'>Yes</span></div>
                                    </td>
                                    <td className="arg_tbl_bdy">Vehicle's pickup location. Preferred location format
                                        <strong className='ml-1 text-blue-800'>City, State Code, Zip Code</strong>. Example
                                        <strong className='ml-1 text-blue-800'>Bellefontaine, OH, 43311</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="arg_tbl_bdy">pickup_address_1</td>
                                    <td className="arg_tbl_bdy">
                                        <div className='w-full'><span className='method_badge delete_badge'>No</span></div>
                                    </td>
                                    <td className="arg_tbl_bdy">Vehicle's pickup address.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="arg_tbl_bdy">pickup_address_2</td>
                                    <td className="arg_tbl_bdy">
                                        <div className='w-full'><span className='method_badge delete_badge'>No</span></div>
                                    </td>
                                    <td className="arg_tbl_bdy">Alternative vehicle's pickup address.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="arg_tbl_bdy">pickup_contact_name</td>
                                    <td className="arg_tbl_bdy">
                                        <div className='w-full'><span className='method_badge delete_badge'>No</span></div>
                                    </td>
                                    <td className="arg_tbl_bdy">The contact's name at vehicle's pickup location.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="arg_tbl_bdy">pickup_phone_1</td>
                                    <td className="arg_tbl_bdy">
                                        <div className='w-full'><span className='method_badge delete_badge'>No</span></div>
                                    </td>
                                    <td className="arg_tbl_bdy">The contact's phone 1 at vehicle's pickup location.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="arg_tbl_bdy">pickup_phone_2</td>
                                    <td className="arg_tbl_bdy">
                                        <div className='w-full'><span className='method_badge delete_badge'>No</span></div>
                                    </td>
                                    <td className="arg_tbl_bdy">The contact's phone 2 at vehicle's pickup location.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="arg_tbl_bdy">pickup_phone_3</td>
                                    <td className="arg_tbl_bdy">
                                        <div className='w-full'><span className='method_badge delete_badge'>No</span></div>
                                    </td>
                                    <td className="arg_tbl_bdy">The contact's phone 3 at vehicle's pickup location.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="arg_tbl_bdy">pickup_company_name</td>
                                    <td className="arg_tbl_bdy">
                                        <div className='w-full'><span className='method_badge delete_badge'>No</span></div>
                                    </td>
                                    <td className="arg_tbl_bdy">Pickup company name.</td>
                                </tr>
                                <tr>
                                    <td className="arg_tbl_bdy">pickup_buyer_number</td>
                                    <td className="arg_tbl_bdy">
                                        <div className='w-full'><span className='method_badge delete_badge'>No</span></div>
                                    </td>
                                    <td className="arg_tbl_bdy">Pickup buyer number.</td>
                                </tr>
                                <tr>
                                    <td className="arg_tbl_bdy">dropoff_location</td>
                                    <td className="arg_tbl_bdy">
                                        <div className='w-full'><span className='method_badge get_badge'>Yes</span></div>
                                    </td>
                                    <td className="arg_tbl_bdy">Vehicle's dropoff location. Preferred location format
                                        <strong className='ml-1 text-blue-800'>City, State Code, Zip Code</strong>. Example
                                        <strong className='ml-1 text-blue-800'>New York, NY, 10001</strong>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="arg_tbl_bdy">dropoff_address_1</td>
                                    <td className="arg_tbl_bdy">
                                        <div className='w-full'><span className='method_badge delete_badge'>No</span></div>
                                    </td>
                                    <td className="arg_tbl_bdy">Vehicle's dropoff address.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="arg_tbl_bdy">dropoff_address_2</td>
                                    <td className="arg_tbl_bdy">
                                        <div className='w-full'><span className='method_badge delete_badge'>No</span></div>
                                    </td>
                                    <td className="arg_tbl_bdy">Alternative vehicle's dropoff address.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="arg_tbl_bdy">dropoff_contact_name</td>
                                    <td className="arg_tbl_bdy">
                                        <div className='w-full'><span className='method_badge delete_badge'>No</span></div>
                                    </td>
                                    <td className="arg_tbl_bdy">The contact's name at vehicle's dropoff location.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="arg_tbl_bdy">dropoff_phone_1</td>
                                    <td className="arg_tbl_bdy">
                                        <div className='w-full'><span className='method_badge delete_badge'>No</span></div>
                                    </td>
                                    <td className="arg_tbl_bdy">The contact's phone 1 at vehicle's dropoff location.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="arg_tbl_bdy">dropoff_phone_2</td>
                                    <td className="arg_tbl_bdy">
                                        <div className='w-full'><span className='method_badge delete_badge'>No</span></div>
                                    </td>
                                    <td className="arg_tbl_bdy">The contact's phone 2 at vehicle's dropoff location.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="arg_tbl_bdy">dropoff_phone_3</td>
                                    <td className="arg_tbl_bdy">
                                        <div className='w-full'><span className='method_badge delete_badge'>No</span></div>
                                    </td>
                                    <td className="arg_tbl_bdy">The contact's phone 3 at vehicle's dropoff location.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="arg_tbl_bdy">dropoff_company_name</td>
                                    <td className="arg_tbl_bdy">
                                        <div className='w-full'><span className='method_badge delete_badge'>No</span></div>
                                    </td>
                                    <td className="arg_tbl_bdy">Dropoff company name.</td>
                                </tr>
                                <tr>
                                    <td className="arg_tbl_bdy">dropoff_buyer_number</td>
                                    <td className="arg_tbl_bdy">
                                        <div className='w-full'><span className='method_badge delete_badge'>No</span></div>
                                    </td>
                                    <td className="arg_tbl_bdy">Dropoff buyer number.</td>
                                </tr>
                                <tr>
                                    <td className="arg_tbl_bdy">trailer_type</td>
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
                                <tr>
                                    <td className="arg_tbl_bdy">vehicle_runs</td>
                                    <td className="arg_tbl_bdy">
                                        <div className='w-full'><span className='method_badge get_badge'>Yes</span></div>
                                        <div className='w-full mt-1'><strong>Expected Value:</strong>
                                            Yes or No
                                        </div>
                                    </td>
                                    <td className="arg_tbl_bdy">This is <strong className='text-blue-800 ml-1'>Yes</strong> id the vehicle
                                        moves on it's own and <strong className='ml-1 text-blue-800'>No</strong> if it needs assistance
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
                    <div className='w-full mt-6'>
                        <strong className='mr-1'>Next:</strong>
                        <Link href="/endpoints/shippers/collect-signature" className='text-blue-800'>How to collect shipper's signature.</Link>
                    </div>
                </section>
            </div>
        </LanguageContext.Provider>
    )
}

export default UpdateOrderTransitInfo