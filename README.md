# Angular Nested Reactive Forms

This repo intend to demontrate how to create reusable component to handle forms part using Angular Reactive Forms.  
This document will go through multiple explanations and uses cases will be demonstrated within source code.

# Why not implementing ControlValueAccessor

> Code sample : [cva-form-demo](./cva-form-demo/)

## What is ControlValueAccessor

If you're familiar with Angular forms, you may have heard of [ControlValueAccessor](https://angular.io/api/forms/ControlValueAccessor).
Citing from the Angular documentation: 
> \[ControlValueAccessor\] is interface that acts as a bridge between the Angular forms API and a native element in the DOM.

It is a pretty simple interface with 4 methods:
```typescript
interface ControlValueAccessor {
    writeValue(obj: any): void
    registerOnChange(fn: any): void
    registerOnTouched(fn: any): void
    setDisabledState(isDisabled: boolean)?: void
}
```

What it does is to sync a value and actions (change & touched) as well as the disable state with a DOM input.
While it seems to be the perfect interface to implement for our case, it comes with a big drawback that we'll explain soon.
As it is not the subject here I won't go in detail on how to implement this interface, but you can have a look to [this article](https://medium.com/angular-in-depth/angular-nested-reactive-forms-using-cvas-b394ba2e5d0d) that explains it.

## Why is it not what we need

If you're familiar with Reactive Forms, you know that the core of it is having a instance of a form (usually a `FormGroup`) that contains all of our form tree as `AbstractControl` (see [documentation](https://angular.io/api/forms/AbstractControl)). That form contains all our form keys, their values, their validation rules and their status. From this assertion, you may start to see what drawback awaits us with `ControlValueAccessor` implementation.  
Because CVA synchronize a value and allow to register for changes, it clearly doesn't match Reactive Forms way to work. In fact, it really is more to Template Driven Forms way of working. What should lift a red flag is that you will have to handle a whole part of your form as a `FormControl` because CVA is for handling a value, not a group.  
So if you do use Reactive Forms with ControlValueAccessor to handle sub-form components, you will have a `FormGroup` instance within your parent component, another `FormGroup` instance within your sub-form component, and you will rely on Template-Driven Forms mechanisms for your two `FormGroup` to synchronize their values. You can execute `cva-form-demo` to check how it works.

To summarize, a sub-component with CVA's implementation will act as a blackbox for your parent form and will eventually leed you to a lost of control of your form.


# Using natural Reactive Form flow

# What if I need my sub-component to define validations

# I don't want to define my reusable form multiple times