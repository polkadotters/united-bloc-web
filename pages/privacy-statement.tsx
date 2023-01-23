import Layout from "components/Layout/Layout"

export default function PrivacyStatment() {
  return (
    <Layout>
      <div className="pr-[7%] pl-[7%] md:pr-[15%] md:pl-[15%] pt-[10%]">
        <div className="text-3xl font-bold text-red-500">Privacy Statement</div>
        <div className="mt-4 text-stone-400">UnitedBloc does not collect or store any PII information.</div>
        <div className="mt-2 text-stone-400">UnitedBloc does use IP addresses and transaction requests solely for service management purposes. Performance measurements such as rate limiting and routing rules require the analysis of IP addresses and response time measurements require the analysis of transaction requests.</div>
        <div className="mt-2 text-stone-400">UnitedBloc does not and will never use RPC requests to front run transactions.</div>
      </div>
    </Layout>
  )
}
