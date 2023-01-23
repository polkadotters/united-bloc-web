import Layout from "components/Layout/Layout"
import Image from "next/image"
import CoolLoader from "components/CoolLoader"
import Link from "next/link"
import { useState } from "react"


const members = [
  {
    name: "TrueStaking",
    location: "USA",
    website: "truestaking.com"
  },
  {
    name: "CertHum",
    location: "USA",
    website: "certhum.com"
  },
  {
    name: "Blockshard",
    location: "Switzerland",
    website: "letzbake.com"
  },
  {
    name: "BloClick",
    location: "Spain",
    website: "bloclick.com"
  }, {
    name: "BrightlyStake",
    location: "India",
    website: "brightlystake.com"
  }, {
    name: "GPValidator",
    location: "Portugal",
    website: "gpvalidator.com"
  }, {
    name: "Hetavalidation",
    location: "Australia",
    website: "hetavalidation.com"
  }, {
    name: "Legend",
    location: "United Arab Emirates",
    website: "t.me/+RwCajXBybU0zMTQ8"
  }, {
    name: "PathrockNetwork",
    location: "Germany",
    website: "pathrocknetwork.org"
  }, {
    name: "Polkadotters",
    location: "Czech Republic",
    website: "polkadotters.medium.com/polkadotters-who-we-are-5e843e3c99bb"
  }, {
    name: "Crifferent",
    location: "Germany",
    website: "crifferent.de/"
  }, {
    name: "StakeBaby",
    location: "Greece",
    website: "stakebaby.com"
  }, {
    name: "StakeSquid",
    location: "Georgia",
    website: "stakesquid.com"
  },
]


export default function Home() {
  const [doneLoading, setDoneLoading] = useState(false)

  return (
    <>
      {doneLoading && (
        <>
          <Layout>
            <div className="pr-[7%] pl-[7%] md:pr-[15%] md:pl-[15%] pt-[7%]">
              <div className="max-w-[1000px] rounded-md shadow-md bg-secondary-bg p-5">
                <div className="text-4xl font-bold text-red-500">United Bloc</div>
                <div className="text-stone-400 mt-2">
                  <i>“The whole is greater than the sum of its parts”.</i> This truth resonates with the Moonbeam collator community to intentionally collaborate in pursuit of greater community value. United in a shared objective to bring value to our community, a bloc of collators have formed a collective identity named “UnitedBloc”. Our charter is to  leverage the power of a group for the good of the Moonbeam community.  See <Link href="https://medium.com/unitedbloc/unitedbloc-feaaf55f3a4e" target="_blank">https://medium.com/unitedbloc/unitedbloc-feaaf55f3a4e</Link>
                </div>
              </div>
              <div className="max-w-[1000px] rounded-md shadow-md bg-secondary-bg p-5 mt-[5%]">
                <div className="text-4xl font-bold text-red-500">Our Value</div>
                <div className="text-stone-400 mt-2">
                  <div>As individuals, UnitedBloc members bring community value with informational websites, database snapshots, utilities, security recommendations, and monitoring tools. Additionally, members are active participants in community forums and governance.</div>
                  <div className="mt-2">As a group, UnitedBloc can bring even more value and our first community offering is free public RPC. Using eight bare metal geographically distributed servers, UnitedBloc RPC is globally service balanced via geoDNS, regionally load balanced via OpenResty, and serves moonbase, moonriver and moonbeam chains.  See <Link href="https://medium.com/unitedbloc/unitedbloc-rpc-c84972f69457" target="_blank">https://medium.com/unitedbloc/unitedbloc-rpc-c84972f69457</Link></div>
                  <div className="mt-2">
                    <Link href="/privacy-statement" target="_blank" className="underline">Our Privacy Statement</Link>
                  </div>
                </div>
              </div>
              <div className="max-w-[1000px] rounded-md shadow-md bg-secondary-bg p-5 mt-[5%]">
                <div className="text-4xl font-bold text-red-500">Members</div>
                <div className="text-stone-400 mt-2">UnitedBloc is composed of 13 independent collators from 4 continents and 11 countries. Each member brings unique skills, experience, and perspective.</div>
                <div className="mt-2 mb-2 bg-stone-700 h-[2px]"></div>
                <div className="flex flex-wrap">
                  {members.map(m => {
                    return (
                      <div className="w-[200px] pb-2" key={m.name}>
                        <Link href={`https://${m.website}`} target="_blank">
                          <div className="text-stone-400 font-bold">
                            {m.name}
                          </div>
                          <div className="text-stone-600 text-sm font-bold">
                            {m.location}
                          </div>
                        </Link>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </Layout>
          <div className="w-full max-w-[125px] aspect-square fixed bottom-[15px] left-[15px]">
            <Image src="/logo.webp" alt="Main logo" layout="fill" />
          </div>
        </>
      )}
      {!doneLoading && (
        <CoolLoader setDone={() => setDoneLoading(true)} />
      )}
    </>
  )
}
