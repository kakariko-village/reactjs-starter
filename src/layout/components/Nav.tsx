import { useNavigate } from 'react-router-dom'
import { routes } from '@/router'

const navbarList = routes.map((route) => ({
  id: route.path,
  label: route.label,
  path: route.path,
}))

type Props = {}

export const Nav: React.FC<Props> = () => {
  const navigate = useNavigate()
  return (
    <nav className="fixed left-0 top-0 z-10 w-screen bg-primary-blue">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between overflow-x-auto overflow-y-hidden">
          <div className="flex-1 items-center justify-centersm:items-stretch sm:justify-start md:hidden lg:flex xl:flex">
            <div className="sm:ml-6 sm:block">
              <div className="flex select-none space-x-4">
                {navbarList.map(({ path, label }) => (
                  <button
                    key={path}
                    className={
                      'flex-shrink-0 rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700'
                    }
                    onClick={() => navigate(path)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
