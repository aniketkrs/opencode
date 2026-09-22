import type { JSX } from "solid-js"

export function SessionReviewFileHeaderV2(props: { title: JSX.Element; actions?: JSX.Element }) {
  return (
    <div data-slot="session-review-v2-file-header">
      <div data-slot="session-review-v2-file-title">{props.title}</div>
      {props.actions}
    </div>
  )
}
