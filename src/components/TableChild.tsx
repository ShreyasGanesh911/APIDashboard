import React from 'react'

export default function TableChild() {
  return (
    <>
       <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">John Brown</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm ">45</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm ">New York No. 1 Lake Park</td>
              <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400">Delete</button>
              </td>
            </tr>
    </>
  )
}
