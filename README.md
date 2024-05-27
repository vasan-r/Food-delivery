# why react fast
because it fast in dom manuplation, virtual dom.
single page rendering - it doesn't change the whole page  while moving to new page it
just changes the component.
# two types of components
 function component - it is a normal js function which returns jsxfile or react element.
 class Component  - 
 # react element 
 it is a plain js object.
 # react hooks
  -- this is normal js function which have some special powers.
    two major types of hooks
  # useState() - 
    # never use useState hooks inside a condition or function.
  It is the special type of function which rerender the component when there is changes in state variable .
  # useEffect()
  If no dependencies array the useEffect called every time the component is rendered.
  If dependencies is empty array the useEffect called only initial render.
  If there is dependencies array the useEffect called only the time when the dependency updated.
# shimmer UI
It resembles the page's actual UI so user will understand how quickly the web will load before the content is showed up.
# Router
 two types of routing
  *Client side routing
  *server side routing