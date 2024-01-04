import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUniversities } from '@/slices/universitiesSlice'
import UniversitiesList from '@/components/UniversitiesList'
export const UniversitiesPage: React.FC = () => {
  const [countryName, setCountryName] = useState('')
  const dispatch = useDispatch()
  const { universities, loading, error } = useSelector((state: any) => state.universities)

  const handleSearch = async () => {
    if (countryName !== '') {
      dispatch(fetchUniversities(countryName) as any)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
      setCountryName(e.target.value)
    }
  }

  const handleFormSubmit = (e: any) => {
    e.preventDefault()
  }

  return (
    <>
      <div className="mt-[10px] flex">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={countryName}
            onChange={handleChange}
            className="w-[200px]"
            placeholder="Country Name"
          />
          <button
            onClick={handleSearch}
            className="primary ml-[10px]"
            disabled={countryName === ''}
          >
            Search
          </button>
        </form>
      </div>
      <UniversitiesList />
    </>
  )
}
