import { c as create_ssr_component, e as escape, f as createEventDispatcher, d as add_attribute, v as validate_component, m as missing_component, g as each, h as spread, i as escape_object, j as escape_attribute_value, k as globals, a as subscribe, s as setContext, o as onDestroy, l as getContext, p as is_promise, n as noop, q as null_to_empty } from "../../chunks/index-2685dc85.js";
import { b as buildRequest } from "../../chunks/helper-functions-ba68fd5c.js";
import { w as writable } from "../../chunks/index-f9fe0307.js";
import "chart.js/auto";
function isOutOfViewport(parent, container) {
  const parentBounding = parent.getBoundingClientRect();
  const boundingContainer = container.getBoundingClientRect();
  const out = {};
  out.top = parentBounding.top < 0;
  out.left = parentBounding.left < 0;
  out.bottom = parentBounding.bottom + boundingContainer.height > (window.innerHeight || document.documentElement.clientHeight);
  out.right = parentBounding.right > (window.innerWidth || document.documentElement.clientWidth);
  out.any = out.top || out.left || out.bottom || out.right;
  return out;
}
var Item_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".item.svelte-ybdqo9{cursor:default;height:var(--height, 42px);line-height:var(--height, 42px);padding:var(--itemPadding, 0 20px);color:var(--itemColor, inherit);text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.groupHeader.svelte-ybdqo9{text-transform:var(--groupTitleTextTransform, uppercase)}.groupItem.svelte-ybdqo9{padding-left:var(--groupItemPaddingLeft, 40px)}.item.svelte-ybdqo9:active{background:var(--itemActiveBackground, #b9daff)}.item.active.svelte-ybdqo9{background:var(--itemIsActiveBG, #007aff);color:var(--itemIsActiveColor, #fff)}.item.notSelectable.svelte-ybdqo9{color:var(--itemIsNotSelectableColor, #999)}.item.first.svelte-ybdqo9{border-radius:var(--itemFirstBorderRadius, 4px 4px 0 0)}.item.hover.svelte-ybdqo9:not(.active){background:var(--itemHoverBG, #e7f2ff);color:var(--itemHoverColor, inherit)}")();
const css$b = {
  code: ".item.svelte-ybdqo9{cursor:default;height:var(--height, 42px);line-height:var(--height, 42px);padding:var(--itemPadding, 0 20px);color:var(--itemColor, inherit);text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.groupHeader.svelte-ybdqo9{text-transform:var(--groupTitleTextTransform, uppercase)}.groupItem.svelte-ybdqo9{padding-left:var(--groupItemPaddingLeft, 40px)}.item.svelte-ybdqo9:active{background:var(--itemActiveBackground, #b9daff)}.item.active.svelte-ybdqo9{background:var(--itemIsActiveBG, #007aff);color:var(--itemIsActiveColor, #fff)}.item.notSelectable.svelte-ybdqo9{color:var(--itemIsNotSelectableColor, #999)}.item.first.svelte-ybdqo9{border-radius:var(--itemFirstBorderRadius, 4px 4px 0 0)}.item.hover.svelte-ybdqo9:not(.active){background:var(--itemHoverBG, #e7f2ff);color:var(--itemHoverColor, inherit)}",
  map: null
};
const Item = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isActive = false } = $$props;
  let { isFirst = false } = $$props;
  let { isHover = false } = $$props;
  let { isSelectable = false } = $$props;
  let { getOptionLabel = void 0 } = $$props;
  let { item = void 0 } = $$props;
  let { filterText = "" } = $$props;
  let itemClasses = "";
  if ($$props.isActive === void 0 && $$bindings.isActive && isActive !== void 0)
    $$bindings.isActive(isActive);
  if ($$props.isFirst === void 0 && $$bindings.isFirst && isFirst !== void 0)
    $$bindings.isFirst(isFirst);
  if ($$props.isHover === void 0 && $$bindings.isHover && isHover !== void 0)
    $$bindings.isHover(isHover);
  if ($$props.isSelectable === void 0 && $$bindings.isSelectable && isSelectable !== void 0)
    $$bindings.isSelectable(isSelectable);
  if ($$props.getOptionLabel === void 0 && $$bindings.getOptionLabel && getOptionLabel !== void 0)
    $$bindings.getOptionLabel(getOptionLabel);
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  if ($$props.filterText === void 0 && $$bindings.filterText && filterText !== void 0)
    $$bindings.filterText(filterText);
  $$result.css.add(css$b);
  {
    {
      const classes = [];
      if (isActive) {
        classes.push("active");
      }
      if (isFirst) {
        classes.push("first");
      }
      if (isHover) {
        classes.push("hover");
      }
      if (item.isGroupHeader) {
        classes.push("groupHeader");
      }
      if (item.isGroupItem) {
        classes.push("groupItem");
      }
      if (!isSelectable) {
        classes.push("notSelectable");
      }
      itemClasses = classes.join(" ");
    }
  }
  return `<div class="${"item " + escape(itemClasses, true) + " svelte-ybdqo9"}"><!-- HTML_TAG_START -->${getOptionLabel(item, filterText)}<!-- HTML_TAG_END --></div>`;
});
var List_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".listContainer.svelte-1mmk1xt{box-shadow:var(--listShadow, 0 2px 3px 0 rgba(44, 62, 80, 0.24));border-radius:var(--listBorderRadius, 4px);max-height:var(--listMaxHeight, 250px);overflow-y:auto;background:var(--listBackground, #fff);border:var(--listBorder, none);position:var(--listPosition, absolute);z-index:var(--listZIndex, 2);width:100%;left:var(--listLeft, 0);right:var(--listRight, 0)}.virtualList.svelte-1mmk1xt{height:var(--virtualListHeight, 200px)}.listGroupTitle.svelte-1mmk1xt{color:var(--groupTitleColor, #8f8f8f);cursor:default;font-size:var(--groupTitleFontSize, 12px);font-weight:var(--groupTitleFontWeight, 600);height:var(--height, 42px);line-height:var(--height, 42px);padding:var(--groupTitlePadding, 0 20px);text-overflow:ellipsis;overflow-x:hidden;white-space:nowrap;text-transform:var(--groupTitleTextTransform, uppercase)}.empty.svelte-1mmk1xt{text-align:var(--listEmptyTextAlign, center);padding:var(--listEmptyPadding, 20px 0);color:var(--listEmptyColor, #78848f)}")();
const css$a = {
  code: ".listContainer.svelte-1mmk1xt{box-shadow:var(--listShadow, 0 2px 3px 0 rgba(44, 62, 80, 0.24));border-radius:var(--listBorderRadius, 4px);max-height:var(--listMaxHeight, 250px);overflow-y:auto;background:var(--listBackground, #fff);border:var(--listBorder, none);position:var(--listPosition, absolute);z-index:var(--listZIndex, 2);width:100%;left:var(--listLeft, 0);right:var(--listRight, 0)}.virtualList.svelte-1mmk1xt{height:var(--virtualListHeight, 200px)}.listGroupTitle.svelte-1mmk1xt{color:var(--groupTitleColor, #8f8f8f);cursor:default;font-size:var(--groupTitleFontSize, 12px);font-weight:var(--groupTitleFontWeight, 600);height:var(--height, 42px);line-height:var(--height, 42px);padding:var(--groupTitlePadding, 0 20px);text-overflow:ellipsis;overflow-x:hidden;white-space:nowrap;text-transform:var(--groupTitleTextTransform, uppercase)}.empty.svelte-1mmk1xt{text-align:var(--listEmptyTextAlign, center);padding:var(--listEmptyPadding, 20px 0);color:var(--listEmptyColor, #78848f)}",
  map: null
};
function isItemActive(item, value, optionIdentifier) {
  return value && value[optionIdentifier] === item[optionIdentifier];
}
function isItemFirst(itemIndex) {
  return itemIndex === 0;
}
function isItemHover(hoverItemIndex, item, itemIndex, items) {
  return isItemSelectable(item) && (hoverItemIndex === itemIndex || items.length === 1);
}
function isItemSelectable(item) {
  return item.isGroupHeader && item.isSelectable || item.selectable || !item.hasOwnProperty("selectable");
}
const List = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { container = void 0 } = $$props;
  let { VirtualList: VirtualList2 = null } = $$props;
  let { Item: Item$1 = Item } = $$props;
  let { isVirtualList = false } = $$props;
  let { items = [] } = $$props;
  let { labelIdentifier = "label" } = $$props;
  let { getOptionLabel = (option, filterText2) => {
    if (option)
      return option.isCreator ? `Create "${filterText2}"` : option[labelIdentifier];
  } } = $$props;
  let { getGroupHeaderLabel = null } = $$props;
  let { itemHeight = 40 } = $$props;
  let { hoverItemIndex = 0 } = $$props;
  let { value = void 0 } = $$props;
  let { optionIdentifier = "value" } = $$props;
  let { hideEmptyState = false } = $$props;
  let { noOptionsMessage = "No options" } = $$props;
  let { isMulti = false } = $$props;
  let { activeItemIndex = 0 } = $$props;
  let { filterText = "" } = $$props;
  let { parent = null } = $$props;
  let { listPlacement = null } = $$props;
  let { listAutoWidth = null } = $$props;
  let { listOffset = 5 } = $$props;
  let listStyle;
  function computePlacement() {
    const { height, width } = parent.getBoundingClientRect();
    listStyle = "";
    listStyle += `min-width:${width}px;width:${listAutoWidth ? "auto" : "100%"};`;
    if (listPlacement === "top" || listPlacement === "auto" && isOutOfViewport(parent, container).bottom) {
      listStyle += `bottom:${height + listOffset}px;`;
    } else {
      listStyle += `top:${height + listOffset}px;`;
    }
  }
  if ($$props.container === void 0 && $$bindings.container && container !== void 0)
    $$bindings.container(container);
  if ($$props.VirtualList === void 0 && $$bindings.VirtualList && VirtualList2 !== void 0)
    $$bindings.VirtualList(VirtualList2);
  if ($$props.Item === void 0 && $$bindings.Item && Item$1 !== void 0)
    $$bindings.Item(Item$1);
  if ($$props.isVirtualList === void 0 && $$bindings.isVirtualList && isVirtualList !== void 0)
    $$bindings.isVirtualList(isVirtualList);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.labelIdentifier === void 0 && $$bindings.labelIdentifier && labelIdentifier !== void 0)
    $$bindings.labelIdentifier(labelIdentifier);
  if ($$props.getOptionLabel === void 0 && $$bindings.getOptionLabel && getOptionLabel !== void 0)
    $$bindings.getOptionLabel(getOptionLabel);
  if ($$props.getGroupHeaderLabel === void 0 && $$bindings.getGroupHeaderLabel && getGroupHeaderLabel !== void 0)
    $$bindings.getGroupHeaderLabel(getGroupHeaderLabel);
  if ($$props.itemHeight === void 0 && $$bindings.itemHeight && itemHeight !== void 0)
    $$bindings.itemHeight(itemHeight);
  if ($$props.hoverItemIndex === void 0 && $$bindings.hoverItemIndex && hoverItemIndex !== void 0)
    $$bindings.hoverItemIndex(hoverItemIndex);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.optionIdentifier === void 0 && $$bindings.optionIdentifier && optionIdentifier !== void 0)
    $$bindings.optionIdentifier(optionIdentifier);
  if ($$props.hideEmptyState === void 0 && $$bindings.hideEmptyState && hideEmptyState !== void 0)
    $$bindings.hideEmptyState(hideEmptyState);
  if ($$props.noOptionsMessage === void 0 && $$bindings.noOptionsMessage && noOptionsMessage !== void 0)
    $$bindings.noOptionsMessage(noOptionsMessage);
  if ($$props.isMulti === void 0 && $$bindings.isMulti && isMulti !== void 0)
    $$bindings.isMulti(isMulti);
  if ($$props.activeItemIndex === void 0 && $$bindings.activeItemIndex && activeItemIndex !== void 0)
    $$bindings.activeItemIndex(activeItemIndex);
  if ($$props.filterText === void 0 && $$bindings.filterText && filterText !== void 0)
    $$bindings.filterText(filterText);
  if ($$props.parent === void 0 && $$bindings.parent && parent !== void 0)
    $$bindings.parent(parent);
  if ($$props.listPlacement === void 0 && $$bindings.listPlacement && listPlacement !== void 0)
    $$bindings.listPlacement(listPlacement);
  if ($$props.listAutoWidth === void 0 && $$bindings.listAutoWidth && listAutoWidth !== void 0)
    $$bindings.listAutoWidth(listAutoWidth);
  if ($$props.listOffset === void 0 && $$bindings.listOffset && listOffset !== void 0)
    $$bindings.listOffset(listOffset);
  $$result.css.add(css$a);
  {
    {
      if (parent && container)
        computePlacement();
    }
  }
  return `

<div class="${["listContainer svelte-1mmk1xt", isVirtualList ? "virtualList" : ""].join(" ").trim()}"${add_attribute("style", listStyle, 0)}${add_attribute("this", container, 0)}>${isVirtualList ? `${validate_component(VirtualList2 || missing_component, "svelte:component").$$render($$result, { items, itemHeight }, {}, {
    default: ({ item, i }) => {
      return `<div class="listItem">${validate_component(Item$1 || missing_component, "svelte:component").$$render($$result, {
        item,
        filterText,
        getOptionLabel,
        isFirst: isItemFirst(i),
        isActive: isItemActive(item, value, optionIdentifier),
        isHover: isItemHover(hoverItemIndex, item, i, items),
        isSelectable: isItemSelectable(item)
      }, {}, {})}</div>`;
    }
  })}` : `${items.length ? each(items, (item, i) => {
    return `${item.isGroupHeader && !item.isSelectable ? `<div class="listGroupTitle svelte-1mmk1xt">${escape(getGroupHeaderLabel(item))}</div>` : `<div class="listItem" tabindex="-1">${validate_component(Item$1 || missing_component, "svelte:component").$$render($$result, {
      item,
      filterText,
      getOptionLabel,
      isFirst: isItemFirst(i),
      isActive: isItemActive(item, value, optionIdentifier),
      isHover: isItemHover(hoverItemIndex, item, i, items),
      isSelectable: isItemSelectable(item)
    }, {}, {})}
                </div>`}`;
  }) : `${!hideEmptyState ? `<div class="empty svelte-1mmk1xt">${escape(noOptionsMessage)}</div>` : ``}`}`}</div>`;
});
var Selection_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".selection.svelte-1be6cx3{text-overflow:ellipsis;overflow-x:hidden;white-space:nowrap}")();
const css$9 = {
  code: ".selection.svelte-1be6cx3{text-overflow:ellipsis;overflow-x:hidden;white-space:nowrap}",
  map: null
};
const Selection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { getSelectionLabel = void 0 } = $$props;
  let { item = void 0 } = $$props;
  if ($$props.getSelectionLabel === void 0 && $$bindings.getSelectionLabel && getSelectionLabel !== void 0)
    $$bindings.getSelectionLabel(getSelectionLabel);
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  $$result.css.add(css$9);
  return `<div class="selection svelte-1be6cx3"><!-- HTML_TAG_START -->${getSelectionLabel(item)}<!-- HTML_TAG_END --></div>`;
});
var MultiSelection_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".multiSelectItem.svelte-j22aje.svelte-j22aje{background:var(--multiItemBG, #ebedef);margin:var(--multiItemMargin, 5px 5px 0 0);border-radius:var(--multiItemBorderRadius, 16px);height:var(--multiItemHeight, 32px);line-height:var(--multiItemHeight, 32px);display:flex;cursor:default;padding:var(--multiItemPadding, 0 10px 0 15px);max-width:100%}.multiSelectItem_label.svelte-j22aje.svelte-j22aje{margin:var(--multiLabelMargin, 0 5px 0 0);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.multiSelectItem.svelte-j22aje.svelte-j22aje:hover,.multiSelectItem.active.svelte-j22aje.svelte-j22aje{background-color:var(--multiItemActiveBG, #006fff);color:var(--multiItemActiveColor, #fff)}.multiSelectItem.disabled.svelte-j22aje.svelte-j22aje:hover{background:var(--multiItemDisabledHoverBg, #ebedef);color:var(--multiItemDisabledHoverColor, #c1c6cc)}.multiSelectItem_clear.svelte-j22aje.svelte-j22aje{border-radius:var(--multiClearRadius, 50%);background:var(--multiClearBG, #52616f);min-width:var(--multiClearWidth, 16px);max-width:var(--multiClearWidth, 16px);height:var(--multiClearHeight, 16px);position:relative;top:var(--multiClearTop, 8px);text-align:var(--multiClearTextAlign, center);padding:var(--multiClearPadding, 1px)}.multiSelectItem_clear.svelte-j22aje.svelte-j22aje:hover,.active.svelte-j22aje .multiSelectItem_clear.svelte-j22aje{background:var(--multiClearHoverBG, #fff)}.multiSelectItem_clear.svelte-j22aje:hover svg.svelte-j22aje,.active.svelte-j22aje .multiSelectItem_clear svg.svelte-j22aje{fill:var(--multiClearHoverFill, #006fff)}.multiSelectItem_clear.svelte-j22aje svg.svelte-j22aje{fill:var(--multiClearFill, #ebedef);vertical-align:top}")();
const css$8 = {
  code: ".multiSelectItem.svelte-j22aje.svelte-j22aje{background:var(--multiItemBG, #ebedef);margin:var(--multiItemMargin, 5px 5px 0 0);border-radius:var(--multiItemBorderRadius, 16px);height:var(--multiItemHeight, 32px);line-height:var(--multiItemHeight, 32px);display:flex;cursor:default;padding:var(--multiItemPadding, 0 10px 0 15px);max-width:100%}.multiSelectItem_label.svelte-j22aje.svelte-j22aje{margin:var(--multiLabelMargin, 0 5px 0 0);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.multiSelectItem.svelte-j22aje.svelte-j22aje:hover,.multiSelectItem.active.svelte-j22aje.svelte-j22aje{background-color:var(--multiItemActiveBG, #006fff);color:var(--multiItemActiveColor, #fff)}.multiSelectItem.disabled.svelte-j22aje.svelte-j22aje:hover{background:var(--multiItemDisabledHoverBg, #ebedef);color:var(--multiItemDisabledHoverColor, #c1c6cc)}.multiSelectItem_clear.svelte-j22aje.svelte-j22aje{border-radius:var(--multiClearRadius, 50%);background:var(--multiClearBG, #52616f);min-width:var(--multiClearWidth, 16px);max-width:var(--multiClearWidth, 16px);height:var(--multiClearHeight, 16px);position:relative;top:var(--multiClearTop, 8px);text-align:var(--multiClearTextAlign, center);padding:var(--multiClearPadding, 1px)}.multiSelectItem_clear.svelte-j22aje.svelte-j22aje:hover,.active.svelte-j22aje .multiSelectItem_clear.svelte-j22aje{background:var(--multiClearHoverBG, #fff)}.multiSelectItem_clear.svelte-j22aje:hover svg.svelte-j22aje,.active.svelte-j22aje .multiSelectItem_clear svg.svelte-j22aje{fill:var(--multiClearHoverFill, #006fff)}.multiSelectItem_clear.svelte-j22aje svg.svelte-j22aje{fill:var(--multiClearFill, #ebedef);vertical-align:top}",
  map: null
};
const MultiSelection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { value = [] } = $$props;
  let { activeValue = void 0 } = $$props;
  let { isDisabled = false } = $$props;
  let { multiFullItemClearable = false } = $$props;
  let { getSelectionLabel = void 0 } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.activeValue === void 0 && $$bindings.activeValue && activeValue !== void 0)
    $$bindings.activeValue(activeValue);
  if ($$props.isDisabled === void 0 && $$bindings.isDisabled && isDisabled !== void 0)
    $$bindings.isDisabled(isDisabled);
  if ($$props.multiFullItemClearable === void 0 && $$bindings.multiFullItemClearable && multiFullItemClearable !== void 0)
    $$bindings.multiFullItemClearable(multiFullItemClearable);
  if ($$props.getSelectionLabel === void 0 && $$bindings.getSelectionLabel && getSelectionLabel !== void 0)
    $$bindings.getSelectionLabel(getSelectionLabel);
  $$result.css.add(css$8);
  return `${each(value, (item, i) => {
    return `<div class="${"multiSelectItem " + escape(activeValue === i ? "active" : "", true) + " " + escape(isDisabled ? "disabled" : "", true) + " svelte-j22aje"}"><div class="multiSelectItem_label svelte-j22aje"><!-- HTML_TAG_START -->${getSelectionLabel(item)}<!-- HTML_TAG_END --></div>
        ${!isDisabled && !multiFullItemClearable ? `<div class="multiSelectItem_clear svelte-j22aje"><svg width="100%" height="100%" viewBox="-2 -2 50 50" focusable="false" aria-hidden="true" role="presentation" class="svelte-j22aje"><path d="M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124 l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z"></path></svg>
            </div>` : ``}
    </div>`;
  })}`;
});
var VirtualList_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "svelte-virtual-list-viewport.svelte-yyenik{position:relative;overflow-y:auto;-webkit-overflow-scrolling:touch;display:block}svelte-virtual-list-contents.svelte-yyenik,svelte-virtual-list-row.svelte-yyenik{display:block}svelte-virtual-list-row.svelte-yyenik{overflow:hidden}")();
const css$7 = {
  code: "svelte-virtual-list-viewport.svelte-yyenik{position:relative;overflow-y:auto;-webkit-overflow-scrolling:touch;display:block}svelte-virtual-list-contents.svelte-yyenik,svelte-virtual-list-row.svelte-yyenik{display:block}svelte-virtual-list-row.svelte-yyenik{overflow:hidden}",
  map: null
};
const VirtualList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items = void 0 } = $$props;
  let { height = "100%" } = $$props;
  let { itemHeight = 40 } = $$props;
  let { hoverItemIndex = 0 } = $$props;
  let { start = 0 } = $$props;
  let { end = 0 } = $$props;
  let viewport;
  let contents;
  let visible;
  let top = 0;
  let bottom = 0;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.itemHeight === void 0 && $$bindings.itemHeight && itemHeight !== void 0)
    $$bindings.itemHeight(itemHeight);
  if ($$props.hoverItemIndex === void 0 && $$bindings.hoverItemIndex && hoverItemIndex !== void 0)
    $$bindings.hoverItemIndex(hoverItemIndex);
  if ($$props.start === void 0 && $$bindings.start && start !== void 0)
    $$bindings.start(start);
  if ($$props.end === void 0 && $$bindings.end && end !== void 0)
    $$bindings.end(end);
  $$result.css.add(css$7);
  visible = items.slice(start, end).map((data, i) => {
    return { index: i + start, data };
  });
  return `<svelte-virtual-list-viewport style="${"height: " + escape(height, true) + ";"}" class="svelte-yyenik"${add_attribute("this", viewport, 0)}><svelte-virtual-list-contents style="${"padding-top: " + escape(top, true) + "px; padding-bottom: " + escape(bottom, true) + "px;"}" class="svelte-yyenik"${add_attribute("this", contents, 0)}>${each(visible, (row) => {
    return `<svelte-virtual-list-row class="svelte-yyenik">${slots.default ? slots.default({
      item: row.data,
      i: row.index,
      hoverItemIndex
    }) : `Missing template`}
            </svelte-virtual-list-row>`;
  })}</svelte-virtual-list-contents></svelte-virtual-list-viewport>`;
});
const ClearIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="100%" height="100%" viewBox="-2 -2 50 50" focusable="false" aria-hidden="true" role="presentation"><path fill="currentColor" d="M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124
    l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z"></path></svg>`;
});
function debounce(func, wait, immediate) {
  let timeout;
  return function executedFunction() {
    let context = this;
    let args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate)
        func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow)
      func.apply(context, args);
  };
}
var Select_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".selectContainer.svelte-1c314rr.svelte-1c314rr{--internalPadding:0 16px;border:var(--border, 1px solid #d8dbdf);border-radius:var(--borderRadius, 3px);box-sizing:border-box;height:var(--height, 42px);position:relative;display:flex;align-items:center;padding:var(--padding, var(--internalPadding));background:var(--background, #fff);margin:var(--margin, 0)}.selectContainer.svelte-1c314rr input.svelte-1c314rr{cursor:default;border:none;color:var(--inputColor, #3f4f5f);height:var(--height, 42px);line-height:var(--height, 42px);padding:var(--inputPadding, var(--padding, var(--internalPadding)));width:100%;background:transparent;font-size:var(--inputFontSize, 14px);letter-spacing:var(--inputLetterSpacing, -0.08px);position:absolute;left:var(--inputLeft, 0);margin:var(--inputMargin, 0)}.selectContainer.svelte-1c314rr input.svelte-1c314rr::-moz-placeholder{color:var(--placeholderColor, #78848f);opacity:var(--placeholderOpacity, 1)}.selectContainer.svelte-1c314rr input.svelte-1c314rr::placeholder{color:var(--placeholderColor, #78848f);opacity:var(--placeholderOpacity, 1)}.selectContainer.svelte-1c314rr input.svelte-1c314rr:focus{outline:none}.selectContainer.svelte-1c314rr.svelte-1c314rr:hover{border-color:var(--borderHoverColor, #b2b8bf)}.selectContainer.focused.svelte-1c314rr.svelte-1c314rr{border-color:var(--borderFocusColor, #006fe8)}.selectContainer.disabled.svelte-1c314rr.svelte-1c314rr{background:var(--disabledBackground, #ebedef);border-color:var(--disabledBorderColor, #ebedef);color:var(--disabledColor, #c1c6cc)}.selectContainer.disabled.svelte-1c314rr input.svelte-1c314rr::-moz-placeholder{color:var(--disabledPlaceholderColor, #c1c6cc);opacity:var(--disabledPlaceholderOpacity, 1)}.selectContainer.disabled.svelte-1c314rr input.svelte-1c314rr::placeholder{color:var(--disabledPlaceholderColor, #c1c6cc);opacity:var(--disabledPlaceholderOpacity, 1)}.selectedItem.svelte-1c314rr.svelte-1c314rr{line-height:var(--height, 42px);height:var(--height, 42px);overflow-x:hidden;padding:var(--selectedItemPadding, 0 20px 0 0)}.selectedItem.svelte-1c314rr.svelte-1c314rr:focus{outline:none}.clearSelect.svelte-1c314rr.svelte-1c314rr{position:absolute;right:var(--clearSelectRight, 10px);top:var(--clearSelectTop, 11px);bottom:var(--clearSelectBottom, 11px);width:var(--clearSelectWidth, 20px);color:var(--clearSelectColor, #c5cacf);flex:none !important}.clearSelect.svelte-1c314rr.svelte-1c314rr:hover{color:var(--clearSelectHoverColor, #2c3e50)}.selectContainer.focused.svelte-1c314rr .clearSelect.svelte-1c314rr{color:var(--clearSelectFocusColor, #3f4f5f)}.indicator.svelte-1c314rr.svelte-1c314rr{position:absolute;right:var(--indicatorRight, 10px);top:var(--indicatorTop, 11px);width:var(--indicatorWidth, 20px);height:var(--indicatorHeight, 20px);color:var(--indicatorColor, #c5cacf)}.indicator.svelte-1c314rr svg.svelte-1c314rr{display:inline-block;fill:var(--indicatorFill, currentcolor);line-height:1;stroke:var(--indicatorStroke, currentcolor);stroke-width:0}.spinner.svelte-1c314rr.svelte-1c314rr{position:absolute;right:var(--spinnerRight, 10px);top:var(--spinnerLeft, 11px);width:var(--spinnerWidth, 20px);height:var(--spinnerHeight, 20px);color:var(--spinnerColor, #51ce6c);-webkit-animation:svelte-1c314rr-rotate 0.75s linear infinite;animation:svelte-1c314rr-rotate 0.75s linear infinite}.spinner_icon.svelte-1c314rr.svelte-1c314rr{display:block;height:100%;transform-origin:center center;width:100%;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;-webkit-transform:none}.spinner_path.svelte-1c314rr.svelte-1c314rr{stroke-dasharray:90;stroke-linecap:round}.multiSelect.svelte-1c314rr.svelte-1c314rr{display:flex;padding:var(--multiSelectPadding, 0 35px 0 16px);height:auto;flex-wrap:wrap;align-items:stretch}.multiSelect.svelte-1c314rr>.svelte-1c314rr{flex:1 1 50px}.selectContainer.multiSelect.svelte-1c314rr input.svelte-1c314rr{padding:var(--multiSelectInputPadding, 0);position:relative;margin:var(--multiSelectInputMargin, 0)}.hasError.svelte-1c314rr.svelte-1c314rr{border:var(--errorBorder, 1px solid #ff2d55);background:var(--errorBackground, #fff)}.a11yText.svelte-1c314rr.svelte-1c314rr{z-index:9999;border:0px;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0px;white-space:nowrap}@-webkit-keyframes svelte-1c314rr-rotate{100%{transform:rotate(360deg)}}@keyframes svelte-1c314rr-rotate{100%{transform:rotate(360deg)}}")();
const { Object: Object_1 } = globals;
const css$6 = {
  code: ".selectContainer.svelte-1c314rr.svelte-1c314rr{--internalPadding:0 16px;border:var(--border, 1px solid #d8dbdf);border-radius:var(--borderRadius, 3px);box-sizing:border-box;height:var(--height, 42px);position:relative;display:flex;align-items:center;padding:var(--padding, var(--internalPadding));background:var(--background, #fff);margin:var(--margin, 0)}.selectContainer.svelte-1c314rr input.svelte-1c314rr{cursor:default;border:none;color:var(--inputColor, #3f4f5f);height:var(--height, 42px);line-height:var(--height, 42px);padding:var(--inputPadding, var(--padding, var(--internalPadding)));width:100%;background:transparent;font-size:var(--inputFontSize, 14px);letter-spacing:var(--inputLetterSpacing, -0.08px);position:absolute;left:var(--inputLeft, 0);margin:var(--inputMargin, 0)}.selectContainer.svelte-1c314rr input.svelte-1c314rr::-moz-placeholder{color:var(--placeholderColor, #78848f);opacity:var(--placeholderOpacity, 1)}.selectContainer.svelte-1c314rr input.svelte-1c314rr::placeholder{color:var(--placeholderColor, #78848f);opacity:var(--placeholderOpacity, 1)}.selectContainer.svelte-1c314rr input.svelte-1c314rr:focus{outline:none}.selectContainer.svelte-1c314rr.svelte-1c314rr:hover{border-color:var(--borderHoverColor, #b2b8bf)}.selectContainer.focused.svelte-1c314rr.svelte-1c314rr{border-color:var(--borderFocusColor, #006fe8)}.selectContainer.disabled.svelte-1c314rr.svelte-1c314rr{background:var(--disabledBackground, #ebedef);border-color:var(--disabledBorderColor, #ebedef);color:var(--disabledColor, #c1c6cc)}.selectContainer.disabled.svelte-1c314rr input.svelte-1c314rr::-moz-placeholder{color:var(--disabledPlaceholderColor, #c1c6cc);opacity:var(--disabledPlaceholderOpacity, 1)}.selectContainer.disabled.svelte-1c314rr input.svelte-1c314rr::placeholder{color:var(--disabledPlaceholderColor, #c1c6cc);opacity:var(--disabledPlaceholderOpacity, 1)}.selectedItem.svelte-1c314rr.svelte-1c314rr{line-height:var(--height, 42px);height:var(--height, 42px);overflow-x:hidden;padding:var(--selectedItemPadding, 0 20px 0 0)}.selectedItem.svelte-1c314rr.svelte-1c314rr:focus{outline:none}.clearSelect.svelte-1c314rr.svelte-1c314rr{position:absolute;right:var(--clearSelectRight, 10px);top:var(--clearSelectTop, 11px);bottom:var(--clearSelectBottom, 11px);width:var(--clearSelectWidth, 20px);color:var(--clearSelectColor, #c5cacf);flex:none !important}.clearSelect.svelte-1c314rr.svelte-1c314rr:hover{color:var(--clearSelectHoverColor, #2c3e50)}.selectContainer.focused.svelte-1c314rr .clearSelect.svelte-1c314rr{color:var(--clearSelectFocusColor, #3f4f5f)}.indicator.svelte-1c314rr.svelte-1c314rr{position:absolute;right:var(--indicatorRight, 10px);top:var(--indicatorTop, 11px);width:var(--indicatorWidth, 20px);height:var(--indicatorHeight, 20px);color:var(--indicatorColor, #c5cacf)}.indicator.svelte-1c314rr svg.svelte-1c314rr{display:inline-block;fill:var(--indicatorFill, currentcolor);line-height:1;stroke:var(--indicatorStroke, currentcolor);stroke-width:0}.spinner.svelte-1c314rr.svelte-1c314rr{position:absolute;right:var(--spinnerRight, 10px);top:var(--spinnerLeft, 11px);width:var(--spinnerWidth, 20px);height:var(--spinnerHeight, 20px);color:var(--spinnerColor, #51ce6c);-webkit-animation:svelte-1c314rr-rotate 0.75s linear infinite;animation:svelte-1c314rr-rotate 0.75s linear infinite}.spinner_icon.svelte-1c314rr.svelte-1c314rr{display:block;height:100%;transform-origin:center center;width:100%;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;-webkit-transform:none}.spinner_path.svelte-1c314rr.svelte-1c314rr{stroke-dasharray:90;stroke-linecap:round}.multiSelect.svelte-1c314rr.svelte-1c314rr{display:flex;padding:var(--multiSelectPadding, 0 35px 0 16px);height:auto;flex-wrap:wrap;align-items:stretch}.multiSelect.svelte-1c314rr>.svelte-1c314rr{flex:1 1 50px}.selectContainer.multiSelect.svelte-1c314rr input.svelte-1c314rr{padding:var(--multiSelectInputPadding, 0);position:relative;margin:var(--multiSelectInputMargin, 0)}.hasError.svelte-1c314rr.svelte-1c314rr{border:var(--errorBorder, 1px solid #ff2d55);background:var(--errorBackground, #fff)}.a11yText.svelte-1c314rr.svelte-1c314rr{z-index:9999;border:0px;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0px;white-space:nowrap}@-webkit-keyframes svelte-1c314rr-rotate{100%{transform:rotate(360deg)}}@keyframes svelte-1c314rr-rotate{100%{transform:rotate(360deg)}}",
  map: null
};
function convertStringItemsToObjects(_items) {
  return _items.map((item, index) => {
    return { index, value: item, label: `${item}` };
  });
}
const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredItems;
  let showSelectedItem;
  let showClearIcon;
  let placeholderText;
  let showMultiSelect;
  let listProps;
  let ariaSelection;
  let ariaContext;
  const dispatch = createEventDispatcher();
  let { id: id2 = null } = $$props;
  let { container = void 0 } = $$props;
  let { input = void 0 } = $$props;
  let { isMulti = false } = $$props;
  let { multiFullItemClearable = false } = $$props;
  let { isDisabled = false } = $$props;
  let { isCreatable = false } = $$props;
  let { isFocused = false } = $$props;
  let { value = null } = $$props;
  let { filterText = "" } = $$props;
  let { placeholder = "Select..." } = $$props;
  let { placeholderAlwaysShow = false } = $$props;
  let { items = null } = $$props;
  let { itemFilter = (label, filterText2, option) => `${label}`.toLowerCase().includes(filterText2.toLowerCase()) } = $$props;
  let { groupBy = void 0 } = $$props;
  let { groupFilter = (groups) => groups } = $$props;
  let { isGroupHeaderSelectable = false } = $$props;
  let { getGroupHeaderLabel = (option) => {
    return option[labelIdentifier] || option.id;
  } } = $$props;
  let { labelIdentifier = "label" } = $$props;
  let { getOptionLabel = (option, filterText2) => {
    return option.isCreator ? `Create "${filterText2}"` : option[labelIdentifier];
  } } = $$props;
  let { optionIdentifier = "value" } = $$props;
  let { loadOptions = void 0 } = $$props;
  let { hasError = false } = $$props;
  let { containerStyles = "" } = $$props;
  let { getSelectionLabel = (option) => {
    if (option)
      return option[labelIdentifier];
    else
      return null;
  } } = $$props;
  let { createGroupHeaderItem = (groupValue) => {
    return { value: groupValue, label: groupValue };
  } } = $$props;
  let { createItem = (filterText2) => {
    return { value: filterText2, label: filterText2 };
  } } = $$props;
  const getFilteredItems = () => {
    return filteredItems;
  };
  let { isSearchable = true } = $$props;
  let { inputStyles = "" } = $$props;
  let { isClearable = true } = $$props;
  let { isWaiting = false } = $$props;
  let { listPlacement = "auto" } = $$props;
  let { listOpen = false } = $$props;
  let { isVirtualList = false } = $$props;
  let { loadOptionsInterval = 300 } = $$props;
  let { noOptionsMessage = "No options" } = $$props;
  let { hideEmptyState = false } = $$props;
  let { inputAttributes = {} } = $$props;
  let { listAutoWidth = true } = $$props;
  let { itemHeight = 40 } = $$props;
  let { Icon = void 0 } = $$props;
  let { iconProps = {} } = $$props;
  let { showChevron = false } = $$props;
  let { showIndicator = false } = $$props;
  let { containerClasses = "" } = $$props;
  let { indicatorSvg = void 0 } = $$props;
  let { listOffset = 5 } = $$props;
  let { ClearIcon: ClearIcon$1 = ClearIcon } = $$props;
  let { Item: Item$1 = Item } = $$props;
  let { List: List$1 = List } = $$props;
  let { Selection: Selection$1 = Selection } = $$props;
  let { MultiSelection: MultiSelection$1 = MultiSelection } = $$props;
  let { VirtualList: VirtualList$1 = VirtualList } = $$props;
  function filterMethod(args) {
    if (args.loadOptions && args.filterText.length > 0)
      return;
    if (!args.items)
      return [];
    if (args.items && args.items.length > 0 && typeof args.items[0] !== "object") {
      args.items = convertStringItemsToObjects(args.items);
    }
    let filterResults = args.items.filter((item) => {
      let matchesFilter = itemFilter(getOptionLabel(item, args.filterText), args.filterText, item);
      if (matchesFilter && args.isMulti && args.value && Array.isArray(args.value)) {
        matchesFilter = !args.value.some((x) => {
          return x[args.optionIdentifier] === item[args.optionIdentifier];
        });
      }
      return matchesFilter;
    });
    if (args.groupBy) {
      filterResults = filterGroupedItems(filterResults);
    }
    if (args.isCreatable) {
      filterResults = addCreatableItem(filterResults, args.filterText);
    }
    return filterResults;
  }
  function addCreatableItem(_items, _filterText) {
    if (_filterText.length === 0)
      return _items;
    const itemToCreate = createItem(_filterText);
    if (_items[0] && _filterText === _items[0][labelIdentifier])
      return _items;
    itemToCreate.isCreator = true;
    return [..._items, itemToCreate];
  }
  let { selectedValue = null } = $$props;
  let activeValue;
  let prev_value;
  let prev_filterText;
  let prev_isFocused;
  let hoverItemIndex;
  const getItems = debounce(async () => {
    isWaiting = true;
    let res = await loadOptions(filterText).catch((err) => {
      console.warn("svelte-select loadOptions error :>> ", err);
      dispatch("error", { type: "loadOptions", details: err });
    });
    if (res && !res.cancelled) {
      if (res) {
        if (res && res.length > 0 && typeof res[0] !== "object") {
          res = convertStringItemsToObjects(res);
        }
        filteredItems = [...res];
        dispatch("loaded", { items: filteredItems });
      } else {
        filteredItems = [];
      }
      if (isCreatable) {
        filteredItems = addCreatableItem(filteredItems, filterText);
      }
      isWaiting = false;
      isFocused = true;
      listOpen = true;
    }
  }, loadOptionsInterval);
  function setValue() {
    if (typeof value === "string") {
      value = { [optionIdentifier]: value, label: value };
    } else if (isMulti && Array.isArray(value) && value.length > 0) {
      value = value.map((item) => typeof item === "string" ? { value: item, label: item } : item);
    }
  }
  let _inputAttributes;
  function assignInputAttributes() {
    _inputAttributes = Object.assign({
      autocapitalize: "none",
      autocomplete: "off",
      autocorrect: "off",
      spellcheck: false,
      tabindex: 0,
      type: "text",
      "aria-autocomplete": "list"
    }, inputAttributes);
    if (id2) {
      _inputAttributes.id = id2;
    }
    if (!isSearchable) {
      _inputAttributes.readonly = true;
    }
  }
  function filterGroupedItems(_items) {
    const groupValues = [];
    const groups = {};
    _items.forEach((item) => {
      const groupValue = groupBy(item);
      if (!groupValues.includes(groupValue)) {
        groupValues.push(groupValue);
        groups[groupValue] = [];
        if (groupValue) {
          groups[groupValue].push(Object.assign(createGroupHeaderItem(groupValue, item), {
            id: groupValue,
            isGroupHeader: true,
            isSelectable: isGroupHeaderSelectable
          }));
        }
      }
      groups[groupValue].push(Object.assign({ isGroupItem: !!groupValue }, item));
    });
    const sortedGroupedItems = [];
    groupFilter(groupValues).forEach((groupValue) => {
      sortedGroupedItems.push(...groups[groupValue]);
    });
    return sortedGroupedItems;
  }
  function dispatchSelectedItem() {
    if (isMulti) {
      if (JSON.stringify(value) !== JSON.stringify(prev_value)) {
        if (checkValueForDuplicates()) {
          dispatch("select", value);
        }
      }
      return;
    }
    {
      dispatch("select", value);
    }
  }
  function setupFocus() {
    if (isFocused || listOpen) {
      handleFocus();
    } else {
      if (input)
        input.blur();
    }
  }
  function setupMulti() {
    if (value) {
      if (Array.isArray(value)) {
        value = [...value];
      } else {
        value = [value];
      }
    }
  }
  function setupFilterText() {
    if (filterText.length === 0)
      return;
    isFocused = true;
    listOpen = true;
    if (loadOptions) {
      getItems();
    } else {
      listOpen = true;
      if (isMulti) {
        activeValue = void 0;
      }
    }
  }
  function checkValueForDuplicates() {
    let noDuplicates = true;
    if (value) {
      const ids = [];
      const uniqueValues = [];
      value.forEach((val) => {
        if (!ids.includes(val[optionIdentifier])) {
          ids.push(val[optionIdentifier]);
          uniqueValues.push(val);
        } else {
          noDuplicates = false;
        }
      });
      if (!noDuplicates)
        value = uniqueValues;
    }
    return noDuplicates;
  }
  function findItem(selection) {
    let matchTo = selection ? selection[optionIdentifier] : value[optionIdentifier];
    return items.find((item) => item[optionIdentifier] === matchTo);
  }
  function updateValueDisplay(items2) {
    if (!items2 || items2.length === 0 || items2.some((item) => typeof item !== "object"))
      return;
    if (!value || (isMulti ? value.some((selection) => !selection || !selection[optionIdentifier]) : !value[optionIdentifier]))
      return;
    if (Array.isArray(value)) {
      value = value.map((selection) => findItem(selection) || selection);
    } else {
      value = findItem() || value;
    }
  }
  function handleFocus() {
    isFocused = true;
    if (input)
      input.focus();
  }
  function handleClear() {
    value = void 0;
    listOpen = false;
    dispatch("clear", value);
    handleFocus();
  }
  let { ariaValues = (values) => {
    return `Option ${values}, selected.`;
  } } = $$props;
  let { ariaListOpen = (label, count) => {
    return `You are currently focused on option ${label}. There are ${count} results available.`;
  } } = $$props;
  let { ariaFocused = () => {
    return `Select is focused, type to refine list, press down to open the menu.`;
  } } = $$props;
  function handleAriaSelection() {
    let selected = void 0;
    if (isMulti && value.length > 0) {
      selected = value.map((v) => getSelectionLabel(v)).join(", ");
    } else {
      selected = getSelectionLabel(value);
    }
    return ariaValues(selected);
  }
  function handleAriaContent() {
    if (!isFocused || !filteredItems || filteredItems.length === 0)
      return "";
    let _item = filteredItems[hoverItemIndex];
    if (listOpen && _item) {
      let label = getSelectionLabel(_item);
      let count = filteredItems ? filteredItems.length : 0;
      return ariaListOpen(label, count);
    } else {
      return ariaFocused();
    }
  }
  if ($$props.id === void 0 && $$bindings.id && id2 !== void 0)
    $$bindings.id(id2);
  if ($$props.container === void 0 && $$bindings.container && container !== void 0)
    $$bindings.container(container);
  if ($$props.input === void 0 && $$bindings.input && input !== void 0)
    $$bindings.input(input);
  if ($$props.isMulti === void 0 && $$bindings.isMulti && isMulti !== void 0)
    $$bindings.isMulti(isMulti);
  if ($$props.multiFullItemClearable === void 0 && $$bindings.multiFullItemClearable && multiFullItemClearable !== void 0)
    $$bindings.multiFullItemClearable(multiFullItemClearable);
  if ($$props.isDisabled === void 0 && $$bindings.isDisabled && isDisabled !== void 0)
    $$bindings.isDisabled(isDisabled);
  if ($$props.isCreatable === void 0 && $$bindings.isCreatable && isCreatable !== void 0)
    $$bindings.isCreatable(isCreatable);
  if ($$props.isFocused === void 0 && $$bindings.isFocused && isFocused !== void 0)
    $$bindings.isFocused(isFocused);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.filterText === void 0 && $$bindings.filterText && filterText !== void 0)
    $$bindings.filterText(filterText);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.placeholderAlwaysShow === void 0 && $$bindings.placeholderAlwaysShow && placeholderAlwaysShow !== void 0)
    $$bindings.placeholderAlwaysShow(placeholderAlwaysShow);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.itemFilter === void 0 && $$bindings.itemFilter && itemFilter !== void 0)
    $$bindings.itemFilter(itemFilter);
  if ($$props.groupBy === void 0 && $$bindings.groupBy && groupBy !== void 0)
    $$bindings.groupBy(groupBy);
  if ($$props.groupFilter === void 0 && $$bindings.groupFilter && groupFilter !== void 0)
    $$bindings.groupFilter(groupFilter);
  if ($$props.isGroupHeaderSelectable === void 0 && $$bindings.isGroupHeaderSelectable && isGroupHeaderSelectable !== void 0)
    $$bindings.isGroupHeaderSelectable(isGroupHeaderSelectable);
  if ($$props.getGroupHeaderLabel === void 0 && $$bindings.getGroupHeaderLabel && getGroupHeaderLabel !== void 0)
    $$bindings.getGroupHeaderLabel(getGroupHeaderLabel);
  if ($$props.labelIdentifier === void 0 && $$bindings.labelIdentifier && labelIdentifier !== void 0)
    $$bindings.labelIdentifier(labelIdentifier);
  if ($$props.getOptionLabel === void 0 && $$bindings.getOptionLabel && getOptionLabel !== void 0)
    $$bindings.getOptionLabel(getOptionLabel);
  if ($$props.optionIdentifier === void 0 && $$bindings.optionIdentifier && optionIdentifier !== void 0)
    $$bindings.optionIdentifier(optionIdentifier);
  if ($$props.loadOptions === void 0 && $$bindings.loadOptions && loadOptions !== void 0)
    $$bindings.loadOptions(loadOptions);
  if ($$props.hasError === void 0 && $$bindings.hasError && hasError !== void 0)
    $$bindings.hasError(hasError);
  if ($$props.containerStyles === void 0 && $$bindings.containerStyles && containerStyles !== void 0)
    $$bindings.containerStyles(containerStyles);
  if ($$props.getSelectionLabel === void 0 && $$bindings.getSelectionLabel && getSelectionLabel !== void 0)
    $$bindings.getSelectionLabel(getSelectionLabel);
  if ($$props.createGroupHeaderItem === void 0 && $$bindings.createGroupHeaderItem && createGroupHeaderItem !== void 0)
    $$bindings.createGroupHeaderItem(createGroupHeaderItem);
  if ($$props.createItem === void 0 && $$bindings.createItem && createItem !== void 0)
    $$bindings.createItem(createItem);
  if ($$props.getFilteredItems === void 0 && $$bindings.getFilteredItems && getFilteredItems !== void 0)
    $$bindings.getFilteredItems(getFilteredItems);
  if ($$props.isSearchable === void 0 && $$bindings.isSearchable && isSearchable !== void 0)
    $$bindings.isSearchable(isSearchable);
  if ($$props.inputStyles === void 0 && $$bindings.inputStyles && inputStyles !== void 0)
    $$bindings.inputStyles(inputStyles);
  if ($$props.isClearable === void 0 && $$bindings.isClearable && isClearable !== void 0)
    $$bindings.isClearable(isClearable);
  if ($$props.isWaiting === void 0 && $$bindings.isWaiting && isWaiting !== void 0)
    $$bindings.isWaiting(isWaiting);
  if ($$props.listPlacement === void 0 && $$bindings.listPlacement && listPlacement !== void 0)
    $$bindings.listPlacement(listPlacement);
  if ($$props.listOpen === void 0 && $$bindings.listOpen && listOpen !== void 0)
    $$bindings.listOpen(listOpen);
  if ($$props.isVirtualList === void 0 && $$bindings.isVirtualList && isVirtualList !== void 0)
    $$bindings.isVirtualList(isVirtualList);
  if ($$props.loadOptionsInterval === void 0 && $$bindings.loadOptionsInterval && loadOptionsInterval !== void 0)
    $$bindings.loadOptionsInterval(loadOptionsInterval);
  if ($$props.noOptionsMessage === void 0 && $$bindings.noOptionsMessage && noOptionsMessage !== void 0)
    $$bindings.noOptionsMessage(noOptionsMessage);
  if ($$props.hideEmptyState === void 0 && $$bindings.hideEmptyState && hideEmptyState !== void 0)
    $$bindings.hideEmptyState(hideEmptyState);
  if ($$props.inputAttributes === void 0 && $$bindings.inputAttributes && inputAttributes !== void 0)
    $$bindings.inputAttributes(inputAttributes);
  if ($$props.listAutoWidth === void 0 && $$bindings.listAutoWidth && listAutoWidth !== void 0)
    $$bindings.listAutoWidth(listAutoWidth);
  if ($$props.itemHeight === void 0 && $$bindings.itemHeight && itemHeight !== void 0)
    $$bindings.itemHeight(itemHeight);
  if ($$props.Icon === void 0 && $$bindings.Icon && Icon !== void 0)
    $$bindings.Icon(Icon);
  if ($$props.iconProps === void 0 && $$bindings.iconProps && iconProps !== void 0)
    $$bindings.iconProps(iconProps);
  if ($$props.showChevron === void 0 && $$bindings.showChevron && showChevron !== void 0)
    $$bindings.showChevron(showChevron);
  if ($$props.showIndicator === void 0 && $$bindings.showIndicator && showIndicator !== void 0)
    $$bindings.showIndicator(showIndicator);
  if ($$props.containerClasses === void 0 && $$bindings.containerClasses && containerClasses !== void 0)
    $$bindings.containerClasses(containerClasses);
  if ($$props.indicatorSvg === void 0 && $$bindings.indicatorSvg && indicatorSvg !== void 0)
    $$bindings.indicatorSvg(indicatorSvg);
  if ($$props.listOffset === void 0 && $$bindings.listOffset && listOffset !== void 0)
    $$bindings.listOffset(listOffset);
  if ($$props.ClearIcon === void 0 && $$bindings.ClearIcon && ClearIcon$1 !== void 0)
    $$bindings.ClearIcon(ClearIcon$1);
  if ($$props.Item === void 0 && $$bindings.Item && Item$1 !== void 0)
    $$bindings.Item(Item$1);
  if ($$props.List === void 0 && $$bindings.List && List$1 !== void 0)
    $$bindings.List(List$1);
  if ($$props.Selection === void 0 && $$bindings.Selection && Selection$1 !== void 0)
    $$bindings.Selection(Selection$1);
  if ($$props.MultiSelection === void 0 && $$bindings.MultiSelection && MultiSelection$1 !== void 0)
    $$bindings.MultiSelection(MultiSelection$1);
  if ($$props.VirtualList === void 0 && $$bindings.VirtualList && VirtualList$1 !== void 0)
    $$bindings.VirtualList(VirtualList$1);
  if ($$props.selectedValue === void 0 && $$bindings.selectedValue && selectedValue !== void 0)
    $$bindings.selectedValue(selectedValue);
  if ($$props.handleClear === void 0 && $$bindings.handleClear && handleClear !== void 0)
    $$bindings.handleClear(handleClear);
  if ($$props.ariaValues === void 0 && $$bindings.ariaValues && ariaValues !== void 0)
    $$bindings.ariaValues(ariaValues);
  if ($$props.ariaListOpen === void 0 && $$bindings.ariaListOpen && ariaListOpen !== void 0)
    $$bindings.ariaListOpen(ariaListOpen);
  if ($$props.ariaFocused === void 0 && $$bindings.ariaFocused && ariaFocused !== void 0)
    $$bindings.ariaFocused(ariaFocused);
  $$result.css.add(css$6);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    filteredItems = filterMethod({
      loadOptions,
      filterText,
      items,
      value,
      isMulti,
      optionIdentifier,
      groupBy,
      isCreatable
    });
    {
      {
        if (selectedValue)
          console.warn("selectedValue is no longer used. Please use value instead.");
      }
    }
    {
      updateValueDisplay(items);
    }
    {
      {
        if (value)
          setValue();
      }
    }
    {
      {
        if (inputAttributes || !isSearchable)
          assignInputAttributes();
      }
    }
    {
      {
        if (isMulti) {
          setupMulti();
        }
      }
    }
    {
      {
        if (isMulti && value && value.length > 1) {
          checkValueForDuplicates();
        }
      }
    }
    {
      {
        if (value)
          dispatchSelectedItem();
      }
    }
    {
      {
        if (!value && isMulti && prev_value) {
          dispatch("select", value);
        }
      }
    }
    {
      {
        if (isFocused !== prev_isFocused) {
          setupFocus();
        }
      }
    }
    {
      {
        if (filterText !== prev_filterText) {
          setupFilterText();
        }
      }
    }
    showSelectedItem = value && filterText.length === 0;
    showClearIcon = showSelectedItem && isClearable && !isDisabled && !isWaiting;
    placeholderText = placeholderAlwaysShow && isMulti ? placeholder : value ? "" : placeholder;
    showMultiSelect = isMulti && value && value.length > 0;
    listProps = {
      Item: Item$1,
      filterText,
      optionIdentifier,
      noOptionsMessage,
      hideEmptyState,
      isVirtualList,
      VirtualList: VirtualList$1,
      value,
      isMulti,
      getGroupHeaderLabel,
      items: filteredItems,
      itemHeight,
      getOptionLabel,
      listPlacement,
      parent: container,
      listAutoWidth,
      listOffset
    };
    ariaSelection = value ? handleAriaSelection() : "";
    ariaContext = handleAriaContent();
    $$rendered = `

<div class="${[
      "selectContainer " + escape(containerClasses, true) + " svelte-1c314rr",
      (hasError ? "hasError" : "") + " " + (isMulti ? "multiSelect" : "") + " " + (isDisabled ? "disabled" : "") + " " + (isFocused ? "focused" : "")
    ].join(" ").trim()}"${add_attribute("style", containerStyles, 0)}${add_attribute("this", container, 0)}><span aria-live="polite" aria-atomic="false" aria-relevant="additions text" class="a11yText svelte-1c314rr">${isFocused ? `<span id="aria-selection">${escape(ariaSelection)}</span>
            <span id="aria-context">${escape(ariaContext)}</span>` : ``}</span>

    ${Icon ? `${validate_component(Icon || missing_component, "svelte:component").$$render($$result, Object_1.assign({}, iconProps), {}, {})}` : ``}

    ${showMultiSelect ? `${validate_component(MultiSelection$1 || missing_component, "svelte:component").$$render($$result, {
      value,
      getSelectionLabel,
      activeValue,
      isDisabled,
      multiFullItemClearable
    }, {}, {})}` : ``}

    <input${spread([
      { readonly: !isSearchable || null },
      escape_object(_inputAttributes),
      {
        placeholder: escape_attribute_value(placeholderText)
      },
      {
        style: escape_attribute_value(inputStyles)
      },
      { disabled: isDisabled || null }
    ], { classes: "svelte-1c314rr" })}${add_attribute("this", input, 0)}${add_attribute("value", filterText, 0)}>

    ${!isMulti && showSelectedItem ? `<div class="selectedItem svelte-1c314rr">${validate_component(Selection$1 || missing_component, "svelte:component").$$render($$result, { item: value, getSelectionLabel }, {}, {})}</div>` : ``}

    ${showClearIcon ? `<div class="clearSelect svelte-1c314rr" aria-hidden="true">${validate_component(ClearIcon$1 || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div>` : ``}

    ${!showClearIcon && (showIndicator || showChevron && !value || !isSearchable && !isDisabled && !isWaiting && (showSelectedItem && !isClearable || !showSelectedItem)) ? `<div class="indicator svelte-1c314rr" aria-hidden="true">${indicatorSvg ? `<!-- HTML_TAG_START -->${indicatorSvg}<!-- HTML_TAG_END -->` : `<svg width="100%" height="100%" viewBox="0 0 20 20" focusable="false" aria-hidden="true" class="svelte-1c314rr"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747
          3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0
          1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502
          0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0
          0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>`}</div>` : ``}

    ${isWaiting ? `<div class="spinner svelte-1c314rr"><svg class="spinner_icon svelte-1c314rr" viewBox="25 25 50 50"><circle class="spinner_path svelte-1c314rr" cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="5" stroke-miterlimit="10"></circle></svg></div>` : ``}

    ${listOpen ? `${validate_component(List$1 || missing_component, "svelte:component").$$render($$result, Object_1.assign({}, listProps, { hoverItemIndex }), {
      hoverItemIndex: ($$value) => {
        hoverItemIndex = $$value;
        $$settled = false;
      }
    }, {})}` : ``}

    ${!isMulti || isMulti && !showMultiSelect ? `<input${add_attribute("name", inputAttributes.name, 0)} type="hidden"${add_attribute("value", value ? getSelectionLabel(value) : null, 0)} class="svelte-1c314rr">` : ``}

    ${isMulti && showMultiSelect ? `${each(value, (item) => {
      return `<input${add_attribute("name", inputAttributes.name, 0)} type="hidden"${add_attribute("value", item ? getSelectionLabel(item) : null, 0)} class="svelte-1c314rr">`;
    })}` : ``}</div>`;
  } while (!$$settled);
  return $$rendered;
});
let id = 1;
function getId() {
  return `svelte-tabs-${id++}`;
}
const TABS = {};
function removeAndUpdateSelected(arr, item, selectedStore) {
  const index = arr.indexOf(item);
  arr.splice(index, 1);
  selectedStore.update((selected) => selected === item ? arr[index] || arr[arr.length - 1] : selected);
}
const Tabs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_selectedTab;
  let { initialSelectedIndex = 0 } = $$props;
  const tabs = [];
  const panels = [];
  const controls = writable({});
  const labeledBy = writable({});
  const selectedTab = writable(null);
  $$unsubscribe_selectedTab = subscribe(selectedTab, (value) => value);
  const selectedPanel = writable(null);
  function registerItem(arr, item, selectedStore) {
    arr.push(item);
    selectedStore.update((selected) => selected || item);
    onDestroy(() => removeAndUpdateSelected(arr, item, selectedStore));
  }
  function selectTab(tab) {
    const index = tabs.indexOf(tab);
    selectedTab.set(tab);
    selectedPanel.set(panels[index]);
  }
  setContext(TABS, {
    registerTab(tab) {
      registerItem(tabs, tab, selectedTab);
    },
    registerTabElement(tabElement) {
    },
    registerPanel(panel) {
      registerItem(panels, panel, selectedPanel);
    },
    selectTab,
    selectedTab,
    selectedPanel,
    controls,
    labeledBy
  });
  if ($$props.initialSelectedIndex === void 0 && $$bindings.initialSelectedIndex && initialSelectedIndex !== void 0)
    $$bindings.initialSelectedIndex(initialSelectedIndex);
  $$unsubscribe_selectedTab();
  return `<div class="svelte-tabs">${slots.default ? slots.default({}) : ``}</div>`;
});
var Tab_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".svelte-tabs__tab.svelte-bcjkd5{border:none;border-bottom:2px solid transparent;color:#000000;cursor:pointer;list-style:none;display:inline-block;padding:0.5em 0.75em}.svelte-tabs__tab.svelte-bcjkd5:focus{outline:thin dotted}.svelte-tabs__selected.svelte-bcjkd5{border-bottom:2px solid #4F81E5;color:#4F81E5}")();
const css$5 = {
  code: ".svelte-tabs__tab.svelte-bcjkd5{border:none;border-bottom:2px solid transparent;color:#000000;cursor:pointer;list-style:none;display:inline-block;padding:0.5em 0.75em}.svelte-tabs__tab.svelte-bcjkd5:focus{outline:thin dotted}.svelte-tabs__selected.svelte-bcjkd5{border-bottom:2px solid #4F81E5;color:#4F81E5}",
  map: null
};
const Tab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedTab, $$unsubscribe_selectedTab;
  let $controls, $$unsubscribe_controls;
  let tabEl;
  const tab = { id: getId() };
  const { registerTab, registerTabElement, selectTab, selectedTab, controls } = getContext(TABS);
  $$unsubscribe_selectedTab = subscribe(selectedTab, (value) => $selectedTab = value);
  $$unsubscribe_controls = subscribe(controls, (value) => $controls = value);
  let isSelected;
  registerTab(tab);
  $$result.css.add(css$5);
  isSelected = $selectedTab === tab;
  $$unsubscribe_selectedTab();
  $$unsubscribe_controls();
  return `<li role="tab"${add_attribute("id", tab.id, 0)}${add_attribute("aria-controls", $controls[tab.id], 0)}${add_attribute("aria-selected", isSelected, 0)}${add_attribute("tabindex", isSelected ? 0 : -1, 0)} class="${["svelte-tabs__tab svelte-bcjkd5", isSelected ? "svelte-tabs__selected" : ""].join(" ").trim()}"${add_attribute("this", tabEl, 0)}>${slots.default ? slots.default({}) : ``}</li>`;
});
var TabList_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".svelte-tabs__tab-list.svelte-10ei92u{border-bottom:1px solid #CCCCCC;margin:0;padding:0}")();
const css$4 = {
  code: ".svelte-tabs__tab-list.svelte-10ei92u{border-bottom:1px solid #CCCCCC;margin:0;padding:0}",
  map: null
};
const TabList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<ul role="tablist" class="svelte-tabs__tab-list svelte-10ei92u">${slots.default ? slots.default({}) : ``}</ul>`;
});
var TabPanel_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".svelte-tabs__tab-panel.svelte-gnry81{margin-top:0.5em}")();
const css$3 = {
  code: ".svelte-tabs__tab-panel.svelte-gnry81{margin-top:0.5em}",
  map: null
};
const TabPanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $labeledBy, $$unsubscribe_labeledBy;
  let $selectedPanel, $$unsubscribe_selectedPanel;
  const panel = { id: getId() };
  const { registerPanel, selectedPanel, labeledBy } = getContext(TABS);
  $$unsubscribe_selectedPanel = subscribe(selectedPanel, (value) => $selectedPanel = value);
  $$unsubscribe_labeledBy = subscribe(labeledBy, (value) => $labeledBy = value);
  registerPanel(panel);
  $$result.css.add(css$3);
  $$unsubscribe_labeledBy();
  $$unsubscribe_selectedPanel();
  return `<div${add_attribute("id", panel.id, 0)}${add_attribute("aria-labelledby", $labeledBy[panel.id], 0)} class="svelte-tabs__tab-panel svelte-gnry81" role="tabpanel">${$selectedPanel === panel ? `${slots.default ? slots.default({}) : ``}` : ``}</div>`;
});
function isLeapYear(year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
function getMonthLength(year, month) {
  const feb = isLeapYear(year) ? 29 : 28;
  const monthLengths = [31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return monthLengths[month];
}
function toText(date, formatTokens) {
  let text = "";
  if (date) {
    for (const token of formatTokens) {
      if (typeof token === "string") {
        text += token;
      } else {
        text += token.toString(date);
      }
    }
  }
  return text;
}
function getMonthDays(year, month) {
  const monthLength = getMonthLength(year, month);
  const days = [];
  for (let i = 0; i < monthLength; i++) {
    days.push({
      year,
      month,
      number: i + 1
    });
  }
  return days;
}
function getCalendarDays(value, weekStartsOn) {
  const year = value.getFullYear();
  const month = value.getMonth();
  const firstWeekday = new Date(year, month, 1).getDay();
  let days = [];
  const daysBefore = (firstWeekday - weekStartsOn + 7) % 7;
  if (daysBefore > 0) {
    let lastMonth = month - 1;
    let lastMonthYear = year;
    if (lastMonth === -1) {
      lastMonth = 11;
      lastMonthYear = year - 1;
    }
    days = getMonthDays(lastMonthYear, lastMonth).slice(-daysBefore);
  }
  days = days.concat(getMonthDays(year, month));
  let nextMonth = month + 1;
  let nextMonthYear = year;
  if (nextMonth === 12) {
    nextMonth = 0;
    nextMonthYear = year + 1;
  }
  const daysAfter = 42 - days.length;
  days = days.concat(getMonthDays(nextMonthYear, nextMonth).slice(0, daysAfter));
  return days;
}
function getLocaleDefaults() {
  return {
    weekdays: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    weekStartsOn: 1
  };
}
function getInnerLocale(locale = {}) {
  const innerLocale = getLocaleDefaults();
  if (typeof locale.weekStartsOn === "number") {
    innerLocale.weekStartsOn = locale.weekStartsOn;
  }
  if (locale.months)
    innerLocale.months = locale.months;
  if (locale.weekdays)
    innerLocale.weekdays = locale.weekdays;
  return innerLocale;
}
var DatePicker_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".date-time-picker.svelte-go79cf.svelte-go79cf{display:inline-block;color:var(--date-picker-foreground, #000000);background:var(--date-picker-background, #ffffff);-moz-user-select:none;user-select:none;-webkit-user-select:none;padding:0.5rem;cursor:default;font-size:0.75rem;border:1px solid rgba(103, 113, 137, 0.3);border-radius:3px;box-shadow:0px 2px 6px rgba(0, 0, 0, 0.08), 0px 2px 6px rgba(0, 0, 0, 0.11);outline:none;transition:all 80ms cubic-bezier(0.4, 0, 0.2, 1)}.date-time-picker.svelte-go79cf.svelte-go79cf:focus{border-color:var(--date-picker-highlight-border, #0269f7);box-shadow:0px 0px 0px 2px var(--date-picker-highlight-shadow, rgba(2, 105, 247, 0.4))}.tab-container.svelte-go79cf.svelte-go79cf{outline:none}.top.svelte-go79cf.svelte-go79cf{display:flex;justify-content:center;align-items:center;padding-bottom:0.5rem}.dropdown.svelte-go79cf.svelte-go79cf{margin-left:0.25rem;margin-right:0.25rem;position:relative;display:flex}.dropdown.svelte-go79cf svg.svelte-go79cf{position:absolute;right:0px;top:0px;height:100%;width:8px;padding:0rem 0.5rem;pointer-events:none;box-sizing:content-box}.month.svelte-go79cf.svelte-go79cf{flex-grow:1}.year.svelte-go79cf.svelte-go79cf{flex-grow:1}svg.svelte-go79cf.svelte-go79cf{display:block;fill:var(--date-picker-foreground, #000000);opacity:0.75;outline:none}.page-button.svelte-go79cf.svelte-go79cf{background-color:transparent;width:1.5rem;height:1.5rem;flex-shrink:0;border-radius:5px;box-sizing:border-box;border:1px solid transparent;display:flex;align-items:center;justify-content:center}.page-button.svelte-go79cf.svelte-go79cf:hover{background-color:rgba(128, 128, 128, 0.08);border:1px solid rgba(128, 128, 128, 0.08)}.page-button.svelte-go79cf svg.svelte-go79cf{width:0.68rem;height:0.68rem}select.dummy-select.svelte-go79cf.svelte-go79cf{position:absolute;width:100%;pointer-events:none;outline:none;color:var(--date-picker-foreground, #000000);background-color:var(--date-picker-background, #ffffff);border-radius:3px}select.svelte-go79cf:focus+select.dummy-select.svelte-go79cf{border-color:var(--date-picker-highlight-border, #0269f7);box-shadow:0px 0px 0px 2px var(--date-picker-highlight-shadow, rgba(2, 105, 247, 0.4))}select.svelte-go79cf.svelte-go79cf:not(.dummy-select){opacity:0}select.svelte-go79cf.svelte-go79cf{font-size:inherit;font-family:inherit;-webkit-appearance:none;-moz-appearance:none;appearance:none;flex-grow:1;padding:0rem 0.35rem;height:1.5rem;padding-right:1.3rem;margin:0px;border:1px solid rgba(108, 120, 147, 0.3);outline:none;transition:all 80ms cubic-bezier(0.4, 0, 0.2, 1);background-image:none}.header.svelte-go79cf.svelte-go79cf{display:flex;font-weight:600;padding-bottom:2px}.header-cell.svelte-go79cf.svelte-go79cf{width:1.875rem;text-align:center;flex-grow:1}.week.svelte-go79cf.svelte-go79cf{display:flex}.cell.svelte-go79cf.svelte-go79cf{display:flex;align-items:center;justify-content:center;width:2rem;height:1.94rem;flex-grow:1;border-radius:5px;box-sizing:border-box;border:2px solid transparent}.cell.svelte-go79cf.svelte-go79cf:hover{border:1px solid rgba(128, 128, 128, 0.08)}.cell.today.svelte-go79cf.svelte-go79cf{font-weight:600;border:2px solid var(--date-picker-today-border, rgba(128, 128, 128, 0.3))}.cell.svelte-go79cf.svelte-go79cf:hover{background-color:rgba(128, 128, 128, 0.08)}.cell.disabled.svelte-go79cf.svelte-go79cf{visibility:hidden}.cell.disabled.svelte-go79cf.svelte-go79cf:hover{border:none;background-color:transparent}.cell.other-month.svelte-go79cf span.svelte-go79cf{opacity:0.4}.cell.selected.svelte-go79cf.svelte-go79cf{color:var(--date-picker-selected-color, inherit);background:var(--date-picker-selected-background, rgba(2, 105, 247, 0.2));border:2px solid var(--date-picker-highlight-border, #0269f7)}")();
const css$2 = {
  code: ".date-time-picker.svelte-go79cf.svelte-go79cf{display:inline-block;color:var(--date-picker-foreground, #000000);background:var(--date-picker-background, #ffffff);-moz-user-select:none;user-select:none;-webkit-user-select:none;padding:0.5rem;cursor:default;font-size:0.75rem;border:1px solid rgba(103, 113, 137, 0.3);border-radius:3px;box-shadow:0px 2px 6px rgba(0, 0, 0, 0.08), 0px 2px 6px rgba(0, 0, 0, 0.11);outline:none;transition:all 80ms cubic-bezier(0.4, 0, 0.2, 1)}.date-time-picker.svelte-go79cf.svelte-go79cf:focus{border-color:var(--date-picker-highlight-border, #0269f7);box-shadow:0px 0px 0px 2px var(--date-picker-highlight-shadow, rgba(2, 105, 247, 0.4))}.tab-container.svelte-go79cf.svelte-go79cf{outline:none}.top.svelte-go79cf.svelte-go79cf{display:flex;justify-content:center;align-items:center;padding-bottom:0.5rem}.dropdown.svelte-go79cf.svelte-go79cf{margin-left:0.25rem;margin-right:0.25rem;position:relative;display:flex}.dropdown.svelte-go79cf svg.svelte-go79cf{position:absolute;right:0px;top:0px;height:100%;width:8px;padding:0rem 0.5rem;pointer-events:none;box-sizing:content-box}.month.svelte-go79cf.svelte-go79cf{flex-grow:1}.year.svelte-go79cf.svelte-go79cf{flex-grow:1}svg.svelte-go79cf.svelte-go79cf{display:block;fill:var(--date-picker-foreground, #000000);opacity:0.75;outline:none}.page-button.svelte-go79cf.svelte-go79cf{background-color:transparent;width:1.5rem;height:1.5rem;flex-shrink:0;border-radius:5px;box-sizing:border-box;border:1px solid transparent;display:flex;align-items:center;justify-content:center}.page-button.svelte-go79cf.svelte-go79cf:hover{background-color:rgba(128, 128, 128, 0.08);border:1px solid rgba(128, 128, 128, 0.08)}.page-button.svelte-go79cf svg.svelte-go79cf{width:0.68rem;height:0.68rem}select.dummy-select.svelte-go79cf.svelte-go79cf{position:absolute;width:100%;pointer-events:none;outline:none;color:var(--date-picker-foreground, #000000);background-color:var(--date-picker-background, #ffffff);border-radius:3px}select.svelte-go79cf:focus+select.dummy-select.svelte-go79cf{border-color:var(--date-picker-highlight-border, #0269f7);box-shadow:0px 0px 0px 2px var(--date-picker-highlight-shadow, rgba(2, 105, 247, 0.4))}select.svelte-go79cf.svelte-go79cf:not(.dummy-select){opacity:0}select.svelte-go79cf.svelte-go79cf{font-size:inherit;font-family:inherit;-webkit-appearance:none;-moz-appearance:none;appearance:none;flex-grow:1;padding:0rem 0.35rem;height:1.5rem;padding-right:1.3rem;margin:0px;border:1px solid rgba(108, 120, 147, 0.3);outline:none;transition:all 80ms cubic-bezier(0.4, 0, 0.2, 1);background-image:none}.header.svelte-go79cf.svelte-go79cf{display:flex;font-weight:600;padding-bottom:2px}.header-cell.svelte-go79cf.svelte-go79cf{width:1.875rem;text-align:center;flex-grow:1}.week.svelte-go79cf.svelte-go79cf{display:flex}.cell.svelte-go79cf.svelte-go79cf{display:flex;align-items:center;justify-content:center;width:2rem;height:1.94rem;flex-grow:1;border-radius:5px;box-sizing:border-box;border:2px solid transparent}.cell.svelte-go79cf.svelte-go79cf:hover{border:1px solid rgba(128, 128, 128, 0.08)}.cell.today.svelte-go79cf.svelte-go79cf{font-weight:600;border:2px solid var(--date-picker-today-border, rgba(128, 128, 128, 0.3))}.cell.svelte-go79cf.svelte-go79cf:hover{background-color:rgba(128, 128, 128, 0.08)}.cell.disabled.svelte-go79cf.svelte-go79cf{visibility:hidden}.cell.disabled.svelte-go79cf.svelte-go79cf:hover{border:none;background-color:transparent}.cell.other-month.svelte-go79cf span.svelte-go79cf{opacity:0.4}.cell.selected.svelte-go79cf.svelte-go79cf{color:var(--date-picker-selected-color, inherit);background:var(--date-picker-selected-background, rgba(2, 105, 247, 0.2));border:2px solid var(--date-picker-highlight-border, #0269f7)}",
  map: null
};
function cloneDate(d) {
  return new Date(d.getTime());
}
function clamp(d, min2, max2) {
  if (d > max2) {
    return cloneDate(max2);
  } else if (d < min2) {
    return cloneDate(min2);
  } else {
    return cloneDate(d);
  }
}
function getYears(min2, max2) {
  let years2 = [];
  for (let i = min2.getFullYear(); i <= max2.getFullYear(); i++) {
    years2.push(i);
  }
  return years2;
}
function dayIsInRange(calendarDay, min2, max2) {
  const date = new Date(calendarDay.year, calendarDay.month, calendarDay.number);
  const minDate = new Date(min2.getFullYear(), min2.getMonth(), min2.getDate());
  const maxDate = new Date(max2.getFullYear(), max2.getMonth(), max2.getDate());
  return date >= minDate && date <= maxDate;
}
const DatePicker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let iLocale;
  let browseYear;
  let browseMonth;
  let calendarDays;
  createEventDispatcher();
  let { value = null } = $$props;
  function setValue(d) {
    if (d.getTime() !== (value == null ? void 0 : value.getTime())) {
      browseDate = clamp(d, min, max);
      value = cloneDate(browseDate);
    }
  }
  const todayDate = new Date();
  const defaultDate = new Date();
  let browseDate = value ? cloneDate(value) : cloneDate(defaultDate);
  let { min = new Date(defaultDate.getFullYear() - 20, 0, 1) } = $$props;
  let { max = new Date(defaultDate.getFullYear(), 11, 31, 23, 59, 59, 999) } = $$props;
  let years = getYears(min, max);
  let { locale = {} } = $$props;
  let { browseWithoutSelecting = false } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.min === void 0 && $$bindings.min && min !== void 0)
    $$bindings.min(min);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.locale === void 0 && $$bindings.locale && locale !== void 0)
    $$bindings.locale(locale);
  if ($$props.browseWithoutSelecting === void 0 && $$bindings.browseWithoutSelecting && browseWithoutSelecting !== void 0)
    $$bindings.browseWithoutSelecting(browseWithoutSelecting);
  $$result.css.add(css$2);
  {
    if (browseDate.getTime() !== (value == null ? void 0 : value.getTime())) {
      browseDate = value ? cloneDate(value) : browseDate;
    }
  }
  {
    if (value && value > max) {
      setValue(max);
    } else if (value && value < min) {
      setValue(min);
    }
  }
  years = getYears(min, max);
  iLocale = getInnerLocale(locale);
  browseYear = browseDate.getFullYear();
  browseMonth = browseDate.getMonth();
  calendarDays = getCalendarDays(browseDate, iLocale.weekStartsOn);
  return `
<div class="date-time-picker svelte-go79cf" tabindex="0"><div class="tab-container svelte-go79cf" tabindex="-1"><div class="top svelte-go79cf"><button type="button" class="page-button svelte-go79cf" tabindex="-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="svelte-go79cf"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" transform="rotate(180, 12, 12)"></path></svg></button>
      <div class="dropdown month svelte-go79cf"><select${add_attribute("value", browseMonth, 0)} class="svelte-go79cf">${each(iLocale.months, (monthName, i) => {
    return `<option ${new Date(browseYear, i, getMonthLength(browseYear, i), 23, 59, 59, 999) < min || new Date(browseYear, i) > max ? "disabled" : ""}${add_attribute("value", i, 0)}>${escape(monthName)}</option>`;
  })}</select>
        
        <select class="dummy-select svelte-go79cf" tabindex="-1">${each(iLocale.months, (monthName, i) => {
    return `<option${add_attribute("value", i, 0)} ${i === browseMonth ? "selected" : ""}>${escape(monthName)}</option>`;
  })}</select>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="svelte-go79cf"><path d="M6 0l12 12-12 12z" transform="rotate(90, 12, 12)"></path></svg></div>
      <div class="dropdown year svelte-go79cf"><select${add_attribute("value", browseYear, 0)} class="svelte-go79cf">${each(years, (v) => {
    return `<option${add_attribute("value", v, 0)}>${escape(v)}</option>`;
  })}</select>
        
        <select class="dummy-select svelte-go79cf" tabindex="-1">${each(years, (v) => {
    return `<option${add_attribute("value", v, 0)} ${v === browseDate.getFullYear() ? "selected" : ""}>${escape(v)}</option>`;
  })}</select>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="svelte-go79cf"><path d="M6 0l12 12-12 12z" transform="rotate(90, 12, 12)"></path></svg></div>
      <button type="button" class="page-button svelte-go79cf" tabindex="-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="svelte-go79cf"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path></svg></button></div>
    <div class="header svelte-go79cf">${each(Array(7), (_, i) => {
    return `${i + iLocale.weekStartsOn < 7 ? `<div class="header-cell svelte-go79cf">${escape(iLocale.weekdays[iLocale.weekStartsOn + i])}</div>` : `<div class="header-cell svelte-go79cf">${escape(iLocale.weekdays[iLocale.weekStartsOn + i - 7])}</div>`}`;
  })}</div>
    ${each(Array(6), (_, weekIndex) => {
    return `<div class="week svelte-go79cf">${each(calendarDays.slice(weekIndex * 7, weekIndex * 7 + 7), (calendarDay) => {
      return `
          <div class="${[
        "cell svelte-go79cf",
        (!dayIsInRange(calendarDay, min, max) ? "disabled" : "") + " " + (calendarDay.year === (value == null ? void 0 : value.getFullYear()) && calendarDay.month === (value == null ? void 0 : value.getMonth()) && calendarDay.number === value.getDate() ? "selected" : "") + " " + (calendarDay.year === todayDate.getFullYear() && calendarDay.month === todayDate.getMonth() && calendarDay.number === todayDate.getDate() ? "today" : "") + " " + (calendarDay.month !== browseMonth ? "other-month" : "")
      ].join(" ").trim()}"><span class="svelte-go79cf">${escape(calendarDay.number)}</span>
          </div>`;
    })}
      </div>`;
  })}</div>
</div>`;
});
function parse(str, tokens, baseDate) {
  let missingPunctuation = "";
  let valid = true;
  baseDate = baseDate || new Date(2020, 0, 1, 0, 0, 0, 0);
  let year = baseDate.getFullYear();
  let month = baseDate.getMonth();
  let day = baseDate.getDate();
  let hours = baseDate.getHours();
  let minutes = baseDate.getMinutes();
  let seconds = baseDate.getSeconds();
  const ms = baseDate.getMilliseconds();
  function parseString(token) {
    for (let i = 0; i < token.length; i++) {
      if (str.startsWith(token[i])) {
        str = str.slice(1);
      } else {
        valid = false;
        if (str.length === 0)
          missingPunctuation = token.slice(i);
        return;
      }
    }
  }
  function parseUint(pattern, min, max) {
    const matches = str.match(pattern);
    if (matches == null ? void 0 : matches[0]) {
      str = str.slice(matches[0].length);
      const n = parseInt(matches[0]);
      if (n > max || n < min) {
        valid = false;
        return null;
      } else {
        return n;
      }
    } else {
      valid = false;
      return null;
    }
  }
  function parseToken(token) {
    if (typeof token === "string") {
      parseString(token);
    } else if (token.id === "yyyy") {
      const value = parseUint(/^[0-9]{4}/, 0, 9999);
      if (value !== null)
        year = value;
    } else if (token.id === "MM") {
      const value = parseUint(/^[0-9]{2}/, 1, 12);
      if (value !== null)
        month = value - 1;
    } else if (token.id === "dd") {
      const value = parseUint(/^[0-9]{2}/, 1, 31);
      if (value !== null)
        day = value;
    } else if (token.id === "HH") {
      const value = parseUint(/^[0-9]{2}/, 0, 23);
      if (value !== null)
        hours = value;
    } else if (token.id === "mm") {
      const value = parseUint(/^[0-9]{2}/, 0, 59);
      if (value !== null)
        minutes = value;
    } else if (token.id === "ss") {
      const value = parseUint(/^[0-9]{2}/, 0, 59);
      if (value !== null)
        seconds = value;
    }
  }
  for (const token of tokens) {
    parseToken(token);
    if (!valid)
      break;
  }
  const monthLength = getMonthLength(year, month);
  if (day > monthLength) {
    valid = false;
  }
  return {
    date: valid ? new Date(year, month, day, hours, minutes, seconds, ms) : null,
    missingPunctuation
  };
}
function twoDigit(value) {
  return ("0" + value.toString()).slice(-2);
}
const ruleTokens = [
  {
    id: "yyyy",
    toString: (d) => d.getFullYear().toString()
  },
  {
    id: "MM",
    toString: (d) => twoDigit(d.getMonth() + 1)
  },
  {
    id: "dd",
    toString: (d) => twoDigit(d.getDate())
  },
  {
    id: "HH",
    toString: (d) => twoDigit(d.getHours())
  },
  {
    id: "mm",
    toString: (d) => twoDigit(d.getMinutes())
  },
  {
    id: "ss",
    toString: (d) => twoDigit(d.getSeconds())
  }
];
function parseRule(s) {
  for (const token of ruleTokens) {
    if (s.startsWith(token.id)) {
      return token;
    }
  }
}
function createFormat(s) {
  const tokens = [];
  while (s.length > 0) {
    const token = parseRule(s);
    if (token) {
      tokens.push(token);
      s = s.slice(token.id.length);
    } else if (typeof tokens[tokens.length - 1] === "string") {
      tokens[tokens.length - 1] += s[0];
      s = s.slice(1);
    } else {
      tokens.push(s[0]);
      s = s.slice(1);
    }
  }
  return tokens;
}
var DateInput_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".date-time-field.svelte-1bsxr9h{position:relative}input.svelte-1bsxr9h{color:var(--date-picker-foreground, #000000);background:var(--date-picker-background, #ffffff);min-width:0px;box-sizing:border-box;padding:4px 6px;margin:0px;border:1px solid rgba(103, 113, 137, 0.3);border-radius:3px;width:var(--date-input-width, 150px);outline:none;transition:all 80ms cubic-bezier(0.4, 0, 0.2, 1)}input.svelte-1bsxr9h:focus{border-color:var(--date-picker-highlight-border, #0269f7);box-shadow:0px 0px 0px 2px var(--date-picker-highlight-shadow, rgba(2, 105, 247, 0.4))}input.svelte-1bsxr9h:disabled{opacity:0.5}.invalid.svelte-1bsxr9h{border:1px solid rgba(249, 47, 114, 0.5);background-color:rgba(249, 47, 114, 0.1)}.invalid.svelte-1bsxr9h:focus{border-color:#f92f72;box-shadow:0px 0px 0px 2px rgba(249, 47, 114, 0.5)}.picker.svelte-1bsxr9h{display:none;position:absolute;margin-top:1px;z-index:10}.picker.visible.svelte-1bsxr9h{display:block}")();
const css$1 = {
  code: ".date-time-field.svelte-1bsxr9h{position:relative}input.svelte-1bsxr9h{color:var(--date-picker-foreground, #000000);background:var(--date-picker-background, #ffffff);min-width:0px;box-sizing:border-box;padding:4px 6px;margin:0px;border:1px solid rgba(103, 113, 137, 0.3);border-radius:3px;width:var(--date-input-width, 150px);outline:none;transition:all 80ms cubic-bezier(0.4, 0, 0.2, 1)}input.svelte-1bsxr9h:focus{border-color:var(--date-picker-highlight-border, #0269f7);box-shadow:0px 0px 0px 2px var(--date-picker-highlight-shadow, rgba(2, 105, 247, 0.4))}input.svelte-1bsxr9h:disabled{opacity:0.5}.invalid.svelte-1bsxr9h{border:1px solid rgba(249, 47, 114, 0.5);background-color:rgba(249, 47, 114, 0.1)}.invalid.svelte-1bsxr9h:focus{border-color:#f92f72;box-shadow:0px 0px 0px 2px rgba(249, 47, 114, 0.5)}.picker.svelte-1bsxr9h{display:none;position:absolute;margin-top:1px;z-index:10}.picker.visible.svelte-1bsxr9h{display:block}",
  map: null
};
const DateInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $store, $$unsubscribe_store;
  let $innerStore, $$unsubscribe_innerStore;
  createEventDispatcher();
  const defaultDate = new Date();
  const innerStore = writable(null);
  $$unsubscribe_innerStore = subscribe(innerStore, (value2) => $innerStore = value2);
  const store = (() => {
    return {
      subscribe: innerStore.subscribe,
      set: (d) => {
        if (d === null) {
          innerStore.set(null);
          value = d;
        } else if (d.getTime() !== ($innerStore == null ? void 0 : $innerStore.getTime())) {
          innerStore.set(d);
          value = d;
        }
      }
    };
  })();
  $$unsubscribe_store = subscribe(store, (value2) => $store = value2);
  let { value = null } = $$props;
  let { min = new Date(defaultDate.getFullYear() - 20, 0, 1) } = $$props;
  let { max = new Date(defaultDate.getFullYear(), 11, 31, 23, 59, 59, 999) } = $$props;
  let { placeholder = "2020-12-31 23:00:00" } = $$props;
  let { valid = true } = $$props;
  let { disabled = false } = $$props;
  let { format = "yyyy-MM-dd HH:mm:ss" } = $$props;
  let formatTokens = createFormat(format);
  let { locale = {} } = $$props;
  function valueUpdate(value2, formatTokens2) {
    text = toText(value2, formatTokens2);
  }
  let { text = toText($store, formatTokens) } = $$props;
  let textHistory = [text, text];
  function textUpdate(text2, formatTokens2) {
    if (text2.length) {
      const result = parse(text2, formatTokens2, $store);
      if (result.date !== null) {
        valid = true;
        store.set(result.date);
      } else {
        valid = false;
      }
    } else {
      valid = true;
      if (value) {
        value = null;
        store.set(null);
      }
    }
  }
  let { visible = false } = $$props;
  let { closeOnSelection = false } = $$props;
  let { browseWithoutSelecting = false } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.min === void 0 && $$bindings.min && min !== void 0)
    $$bindings.min(min);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.valid === void 0 && $$bindings.valid && valid !== void 0)
    $$bindings.valid(valid);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.format === void 0 && $$bindings.format && format !== void 0)
    $$bindings.format(format);
  if ($$props.locale === void 0 && $$bindings.locale && locale !== void 0)
    $$bindings.locale(locale);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.visible === void 0 && $$bindings.visible && visible !== void 0)
    $$bindings.visible(visible);
  if ($$props.closeOnSelection === void 0 && $$bindings.closeOnSelection && closeOnSelection !== void 0)
    $$bindings.closeOnSelection(closeOnSelection);
  if ($$props.browseWithoutSelecting === void 0 && $$bindings.browseWithoutSelecting && browseWithoutSelecting !== void 0)
    $$bindings.browseWithoutSelecting(browseWithoutSelecting);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      store.set(value);
    }
    formatTokens = createFormat(format);
    {
      valueUpdate($store, formatTokens);
    }
    textHistory = [textHistory[1], text];
    {
      textUpdate(text, formatTokens);
    }
    $$rendered = `<div class="date-time-field svelte-1bsxr9h"><input type="text"${add_attribute("placeholder", placeholder, 0)} ${disabled ? "disabled" : ""} class="${["svelte-1bsxr9h", !valid ? "invalid" : ""].join(" ").trim()}"${add_attribute("value", text, 0)}>
  ${visible && !disabled ? `<div class="${["picker svelte-1bsxr9h", visible ? "visible" : ""].join(" ").trim()}">${validate_component(DatePicker, "DateTimePicker").$$render($$result, {
      min,
      max,
      locale,
      browseWithoutSelecting,
      value: $store
    }, {
      value: ($$value) => {
        $store = $$value;
        $$settled = false;
      }
    }, {})}</div>` : ``}
</div>`;
  } while (!$$settled);
  $$unsubscribe_store();
  $$unsubscribe_innerStore();
  return $$rendered;
});
const Timeseries_chart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pointId } = $$props;
  let { timeRefreshData = 45 } = $$props;
  let captionText = "";
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  JSON.stringify({
    pointsIds: [pointId],
    filtroPorEtiquetas: { etiquetas: [] },
    limite: 2e3
  });
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  console.log(captionText);
  let portfolio;
  let date = new Date();
  if ($$props.pointId === void 0 && $$bindings.pointId && pointId !== void 0)
    $$bindings.pointId(pointId);
  if ($$props.timeRefreshData === void 0 && $$bindings.timeRefreshData && timeRefreshData !== void 0)
    $$bindings.timeRefreshData(timeRefreshData);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(DateInput, "DateInput").$$render($$result, { value: date }, {
      value: ($$value) => {
        date = $$value;
        $$settled = false;
      }
    }, {})}
<canvas${add_attribute("width", 400, 0)}${add_attribute("height", 400, 0)}${add_attribute("this", portfolio, 0)}></canvas>`;
  } while (!$$settled);
  return $$rendered;
});
var actuador_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".toOn.svelte-fpxpia{display:inline-block;border-radius:0.25rem;--tw-bg-opacity:1;background-color:rgb(156 163 175 / var(--tw-bg-opacity));padding-left:1.75rem;padding-right:1.75rem;padding-top:0.75rem;padding-bottom:0.75rem;font-size:0.875rem;line-height:1.25rem;font-weight:500;text-transform:uppercase;line-height:1.375;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)\n}.toOn.svelte-fpxpia:hover{--tw-bg-opacity:1;background-color:rgb(51 65 85 / var(--tw-bg-opacity));--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}.toOff.svelte-fpxpia{display:inline-block;border-radius:0.25rem;--tw-bg-opacity:1;background-color:rgb(51 65 85 / var(--tw-bg-opacity));padding-left:1.75rem;padding-right:1.75rem;padding-top:0.75rem;padding-bottom:0.75rem;font-size:0.875rem;line-height:1.25rem;font-weight:500;text-transform:uppercase;line-height:1.375;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)\n}.toOff.svelte-fpxpia:hover{--tw-bg-opacity:1;background-color:rgb(156 163 175 / var(--tw-bg-opacity));--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}")();
const css = {
  code: ".toOn.svelte-fpxpia{display:inline-block;border-radius:0.25rem;--tw-bg-opacity:1;background-color:rgb(156 163 175 / var(--tw-bg-opacity));padding-left:1.75rem;padding-right:1.75rem;padding-top:0.75rem;padding-bottom:0.75rem;font-size:0.875rem;line-height:1.25rem;font-weight:500;text-transform:uppercase;line-height:1.375;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)\n}.toOn.svelte-fpxpia:hover{--tw-bg-opacity:1;background-color:rgb(51 65 85 / var(--tw-bg-opacity));--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}.toOff.svelte-fpxpia{display:inline-block;border-radius:0.25rem;--tw-bg-opacity:1;background-color:rgb(51 65 85 / var(--tw-bg-opacity));padding-left:1.75rem;padding-right:1.75rem;padding-top:0.75rem;padding-bottom:0.75rem;font-size:0.875rem;line-height:1.25rem;font-weight:500;text-transform:uppercase;line-height:1.375;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)\n}.toOff.svelte-fpxpia:hover{--tw-bg-opacity:1;background-color:rgb(156 163 175 / var(--tw-bg-opacity));--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}",
  map: null
};
const Actuador = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { point } = $$props;
  const apiStandardization = "http://172.24.178.122:8082/v1";
  let checkedValue;
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const raw = JSON.stringify({
    pointsIds: [point.value],
    filtroPorEtiquetas: { etiquetas: [] },
    limite: 1
  });
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const getEstadoActuador = async () => {
    var _a, _b, _c;
    try {
      const res = await fetch(`${apiStandardization}/obtener-datos`, requestOptions);
      const response = await res.json();
      checkedValue = ((_b = (_a = response.response) == null ? void 0 : _a[0]) == null ? void 0 : _b.registro.value.toUpperCase()) === "on".toUpperCase();
      console.log(response);
      return (_c = response.response) == null ? void 0 : _c[0];
    } catch (e) {
      throw new Error(e);
    }
  };
  if ($$props.point === void 0 && $$bindings.point && point !== void 0)
    $$bindings.point(point);
  $$result.css.add(css);
  return `<div class="block"><div class="float-right sm:max-w-screen ml-20 mb-8 flex items-center">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
				<p>Obteniendo estado del Actuador...</p>
			`;
    }
    return function(response) {
      var _a, _b;
      return `
				<span class="font-bold not-italic text-base text-gray-700 inline-block align-middle mr-8 pl-1">${escape(((_a = response == null ? void 0 : response.registro) == null ? void 0 : _a.dis) ?? point.label)}: ${escape((((_b = response == null ? void 0 : response.registro) == null ? void 0 : _b["value"]) ?? "off").toUpperCase())}</span>
			`;
    }(__value);
  }(getEstadoActuador())}
			<button type="button" class="${escape(null_to_empty(checkedValue ? "toOff" : "toOn"), true) + " svelte-fpxpia"}">${escape(checkedValue ? "Apagar" : "Encender")}</button></div>
</div>`;
});
const Tab_item = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = false;
  let { equip } = $$props;
  let items = [];
  const value = { value: "0", label: "Todos los Sensores" };
  const formatPoints = (responseArray) => {
    const result = [];
    for (let response of responseArray) {
      result.push({
        value: response.id,
        label: response.dis,
        tags: response.tags,
        clave_esperada: response.clave_esperada,
        equipRef: response.equipRef
      });
    }
    return result;
  };
  const getPoints = async () => {
    const res = await fetch(`/api/queries-fetcher`, buildRequest("point", { where: { equipRef: { _eq: equip.id } } }));
    const response = await res.json();
    items = formatPoints(response == null ? void 0 : response.point);
  };
  getPoints();
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  if ($$props.equip === void 0 && $$bindings.equip && equip !== void 0)
    $$bindings.equip(equip);
  return `<div class="mt-12 w-full"><div class="items-center md:flex mb-8"><div class="ml-24">Punto:</div>
		<div class="ml-8 w-full mr-14">${validate_component(Select, "Select").$$render($$result, {
    items,
    value,
    placeholder: "Todos los Sensores"
  }, {}, {})}</div></div>
	<div class="w-full h-10"><div class="grid grid-cols-1">${`${each(items, (item) => {
    return `${item.tags.run ? `${validate_component(Actuador, "Actuador").$$render($$result, { point: item }, {}, {})}` : ``}`;
  })}
				${each(items, (item) => {
    return `${!item.tags.run ? `
						${validate_component(Timeseries_chart, "TimeseriesChart").$$render($$result, { pointId: item.value }, {}, {})}` : ``}`;
  })}`}</div></div>
</div>`;
});
const Tabs_container = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const getEquips = async () => {
    const res = await fetch(`/api/queries-fetcher`, buildRequest("equip"));
    const response = await res.json();
    return (response == null ? void 0 : response.equip) ?? new Error("No equipments found");
  };
  return `${validate_component(Tabs, "Tabs").$$render($$result, {}, {}, {
    default: () => {
      return `${function(__value) {
        if (is_promise(__value)) {
          __value.then(null, noop);
          return `
		${escape("Cargando equipos...")}
	`;
        }
        return function(response) {
          return `
		${validate_component(TabList, "TabList").$$render($$result, {}, {}, {
            default: () => {
              return `${each(response, (equip) => {
                return `${validate_component(Tab, "Tab").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(equip.dis)}`;
                  }
                })}`;
              })}`;
            }
          })}

		${each(response, (equip) => {
            return `${validate_component(TabPanel, "TabPanel").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Tab_item, "TabItem").$$render($$result, { equip }, {}, {})}`;
              }
            })}`;
          })}
	`;
        }(__value);
      }(getEquips())}`;
    }
  })}`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let items = [];
  const formatPoints = (responseArray) => {
    const result = [];
    for (let response of responseArray) {
      result.push({ value: response.id, label: response.dis });
    }
    return result;
  };
  const getPoints = async () => {
    try {
      const res = await fetch(`/api/queries-fetcher`, buildRequest("point"));
      const response = await res.json();
      items = formatPoints(response == null ? void 0 : response.point);
    } catch (error) {
    }
  };
  getPoints();
  return `<div class="mt-24 w-full">
	<div class="w-full h-10">${validate_component(Tabs_container, "Tab").$$render($$result, {}, {}, {})}
		<div class="grid grid-cols-1">${``}
			${``}</div></div>
</div>`;
});
export { Routes as default };
