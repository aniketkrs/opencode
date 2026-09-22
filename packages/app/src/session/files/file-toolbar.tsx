import { For, Show, type JSX, type ParentProps } from "solid-js"
import { FileIcon } from "@opencode/ui/file-icon"
import { SessionReviewFileHeaderV2 } from "@opencode/session-ui/v2/session-review-file-header-v2"
import { OpenInAppButton } from "@/session/files/open-in-app-button"
import { resolveOpenInAppPath } from "@/session/files/open-in-app-path"
import { useWorkspaceLocation } from "@/workspaces/location"

export function FileToolbar(props: ParentProps<{ path: string; meta?: string[]; actions?: JSX.Element }>) {
  const location = useWorkspaceLocation()
  const absolutePath = () => resolveOpenInAppPath(location().directory, props.path)
  return (
    <SessionReviewFileHeaderV2
      title={
        <>
          <FileIcon node={{ path: props.path, type: "file" }} class="size-4 shrink-0" />
          <span class="min-w-0 flex-1 truncate text-13-regular text-text-muted" title={props.path}>
            {props.path}
          </span>
        </>
      }
      actions={
        <>
          {props.children}
          <div class="ms-auto flex min-w-0 items-center gap-3">
            <div class="flex min-w-0 items-center gap-2 text-12-regular text-text-weak">
              <For each={props.meta ?? []}>
                {(item, index) => (
                  <>
                    <Show when={index() > 0}>
                      <span aria-hidden class="text-text-faint">
                        ·
                      </span>
                    </Show>
                    <span class="truncate tabular-nums">{item}</span>
                  </>
                )}
              </For>
            </div>
            {props.actions}
            <OpenInAppButton path={absolutePath} reveal />
          </div>
        </>
      }
    />
  )
}
