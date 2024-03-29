
function Navbar() {
  return (
    <>
    <div className="w-1/4 bg-black text-zinc-50  ">
      <div className="ml-10">
        <div className=" mt-20">
          <img className="h-20 w-20" src="{Propic}" alt="profile-pic" />
          <p className="text-2xl font-semibold">Samantha</p>
          <p className="text-xs">samantha@email.com</p>
        </div>

        <div className="mt-20 text-lg font-medium">
          <p className="mt-5 ">Dashboard</p>
          <p className="mt-5">Expenses</p>
          <p className="mt-5">Wallets</p>
          <p className="mt-5">Summary</p>
          <p className="mt-5">Accounts</p>
          <p className="mt-5">Settings</p>
        </div>
      </div>   
    </div>
  </>
  )
}

export default Navbar