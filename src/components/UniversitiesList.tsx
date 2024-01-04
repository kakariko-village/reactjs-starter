import React from 'react'
import { useSelector } from 'react-redux'
function UniversitiesList() {
  const { universities, loading, error } = useSelector((state: any) => state.universities)

  return (
    <>
      <div className="my-[20px]">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {universities.length > 0 && !loading && (
          <table className="w-full table-auto border-collapse border border-slate-400 bg-white">
            <thead>
              <tr className="bg-primary-blue text-white">
                <th className="border border-slate-400 px-4  py-2 text-left">Name</th>
                <th className="border border-slate-400 px-4  py-2 text-left">Country</th>
                <th className="border border-slate-400 px-4  py-2 text-left">Code</th>
                <th className="border border-slate-400 px-4  py-2 text-left">Websites</th>
              </tr>
            </thead>
            <tbody>
              {universities.map((university: any) => (
                <tr key={university.domains}>
                  <td className="border border-slate-400 px-4 py-2">{university.name}</td>
                  <td className="border border-slate-400 px-4 py-2">{university.country}</td>
                  <td className="border border-slate-400 px-4 py-2">{university.alpha_two_code}</td>
                  <td className="border border-slate-400 px-4 py-2">
                    {university.web_pages.length > 0
                      ? university.web_pages.map((web: string, index: number) => (
                          <a href={web} key={index} className="block text-blue-500 hover:underline">
                            {web}
                          </a>
                        ))
                      : ''}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  )
}

export default UniversitiesList
