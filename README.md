# Developer Dashboard

A single-page dashboard built with Next.js, showing key metrics, progress indicators, and interactive charts at a glance. No multi-page navigation — everything lives on one screen.

## Features

- **Stat cards** — quick-glance metrics (clients added, contracts signed, invoices sent) with week-over-week change indicators and circular progress rings.
- **Payment overview chart** — line chart with a day/month toggle to switch the time range being displayed.
- **Distribution pie chart** — doughnut chart breaking down data by category.
- Responsive layout with dark mode support.

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router, Turbopack)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ECharts](https://echarts.apache.org/) via [echarts-for-react](https://github.com/hustcc/echarts-for-react)
- [react-icons](https://react-icons.github.io/react-icons/)

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

### Production build

```bash
npm run build
npm run start
```

`npm run build` compiles and optimizes the app into the `.next` folder. `npm run start` serves that production build locally — this is the closest preview to what real users will see (no hot reload, minified bundles, pre-rendered static pages where possible).

## Project Structure

```
app/
├── page.tsx              # Main dashboard page
└── components/
    ├── ChartBox.tsx      # Payment overview card (day/month toggle + line chart)
    ├── Chart.tsx         # Line chart component (ECharts)
    └── PieChart.tsx      # Distribution pie/doughnut chart (ECharts)
```

## Notes

- This is currently a single-route app (`/`) — no routing/navigation between pages.
- Charts use `notMerge={true}` on `ReactECharts` to ensure the chart fully replaces its option on updates rather than merging with the previous render.

## License

MIT