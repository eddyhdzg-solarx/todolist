import Link from "next/link";

const data = [
  {
    text: "Code",
    link: "https://github.com/eddyhdzg-solarx/todolist",
  },
  {
    text: "Meet Up Group",
    link: "https://www.meetup.com/next-js-atx/",
  },
  {
    text: "Discord Group",
    link: "https://discord.gg/qHsm67cW",
  },
];

export function Hello() {
  return (
    <div className="w-full">
      <div className="mb-10 text-center">
        <h1 className="mb-2 text-4xl font-bold">Next.ATX</h1>
        <h2 className="text-zinc text-2xl font-medium text-zinc-100/70">
          Todolist demo
        </h2>
      </div>

      <div className="w-full">
        <div className="bg-zinc-900">
          <div className="mx-auto max-w-7xl">
            <div className="bg-zinc-900 py-4">
              <div className="px-4 sm:px-6 lg:px-8">
                <div className="flow-root">
                  <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                      <table className="min-w-full divide-y divide-zinc-700">
                        <tbody className="divide-y divide-zinc-800">
                          {data.map((row) => (
                            <tr key={row.text} className="md:text-lg">
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 font-medium text-white sm:pl-0">
                                {row.text}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-end text-zinc-200">
                                <Link
                                  href={row.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="underline"
                                >
                                  {row.link}
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
